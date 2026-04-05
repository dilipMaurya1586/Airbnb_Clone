import { Toaster } from "@/components/ui/sonner"
import Router from "./router"
import AuthContextProvider from "@/lib/provider/auth-context-provider"
import ThemeProvider from "@/lib/provider/theme-provider"

const App = () => {
  return (
    <ThemeProvider>
    <AuthContextProvider>
      <Router />
      <Toaster position="top-center" richColors />
    </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App