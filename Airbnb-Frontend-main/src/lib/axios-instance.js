import axios from "axios";
import {
  AUTH_TOKEN_KEY,
  getStorageItem,
  removeStorageItem,
  setStorageItem,
} from "./storage-manager";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
  withCredentials: true,
});

// ─── Request Interceptor ───────────────────────────────────────────────────────
axiosInstance.interceptors.request.use((request) => {
  const authToken = getStorageItem(AUTH_TOKEN_KEY);
  if (authToken) {
    request.headers["Authorization"] = `Bearer ${authToken}`;
  }
  return request;
});

// ─── Response Interceptor ─────────────────────────────────────────────────────
axiosInstance.interceptors.response.use(
  (response) => response.data,

  async (error) => {
    const requestConfig = error.config;

    if (!requestConfig || !error.response) {
      return Promise.reject("Something went wrong");
    }

    if (requestConfig._isRetry) {
      return Promise.reject(error);
    }

    if (error.response.status === 401) {
      // Stop the loop if this request already did a refresh attempt,
      // or if it's the refresh / login endpoint itself
      if (
        requestConfig._isRetry ||
        requestConfig.url === "/auth/refresh" ||
        requestConfig.url === "/auth/login"
      ) {
        removeStorageItem(AUTH_TOKEN_KEY);
        return Promise.reject(error);
      }

      try {
        // Flag the original request so it won't retry more than once
        requestConfig._isRetry = true;

        const response = await axiosInstance.post("/auth/refresh");
        setStorageItem(AUTH_TOKEN_KEY, response.accessToken);

        // Retry the original failed request with the new token
        return axiosInstance(requestConfig);
      } catch {
        removeStorageItem(AUTH_TOKEN_KEY);
        return Promise.reject(error);
      }
    }

    const errorData = {
      ...(error?.response?.data?.error || {}),
      message:
        error?.response?.data?.error?.message || "Something went wrong",
    };
    return Promise.reject(errorData);
  }
);

export default axiosInstance;