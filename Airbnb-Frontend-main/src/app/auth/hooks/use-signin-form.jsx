import PATH_CONFIG from "@/app/config/path.config";
import useMutation from "@/lib/hooks/useMutation";
import { signInSchema } from "@/lib/validators/auth-form-validator";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router";
import { toast } from "sonner";
import { zodResolver } from '@hookform/resolvers/zod'
import { AUTH_TOKEN_KEY, setStorageItem } from "@/lib/storage-manager";
import { useAuthContext } from "@/lib/provider/auth-context-provider";
import { SEARCH_PARAMS_KEYS } from "@/app/config/app.config";

const useSignInForm = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const next = searchParams.get(SEARCH_PARAMS_KEYS.NEXT_REDIRECT);
    const { refetchCurrentUser, setAuthenticatedUser } = useAuthContext();

    const { pending, mutate } = useMutation(PATH_CONFIG.AUTH.SIGN_IN, "POST");

    const form = useForm({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    function handleSignInSubmit(data) {
        mutate(data, {
            onSuccess: (res) => {
                console.log(res);
                toast.success("Login Successful", {
                    description: "Welcome back!",
                });
                setStorageItem(AUTH_TOKEN_KEY, res.data.accessToken);
                setAuthenticatedUser({
                    isAuthenticated: true,
                    user: res.data.user
                });
                refetchCurrentUser();
                navigate(next || "/");
            },
            onError: (err) => {
                console.log(err);
                
                // Handle specific error messages
                let errorMessage = "Something went wrong";
                
                if (err.status === 401) {
                    errorMessage = "Invalid email or password. Please check and try again.";
                } else if (err.status === 404) {
                    errorMessage = "Account not found. Please check your email.";
                } else if (err.status === 400) {
                    errorMessage = "Invalid credentials. Please enter correct email and password.";
                } else if (err.status === 429) {
                    errorMessage = "Too many login attempts. Please try again later.";
                } else if (err.status === 500) {
                    errorMessage = "Server error. Please try again later.";
                } else {
                    errorMessage = err.message || "Login failed. Please try again.";
                }
                
                toast.error("Login Failed", {
                    description: errorMessage,
                });
            }
        });
    }

    return { form, handleSignInSubmit, pending };
};

export { useSignInForm };