import PATH_CONFIG from "@/app/config/path.config";
import useMutation from "@/lib/hooks/useMutation";
import { signUpSchema } from "@/lib/validators/auth-form-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const useSignUpForm = () => {
    const navigate = useNavigate();

    const { pending, mutate } = useMutation(PATH_CONFIG.AUTH.SIGN_UP, "POST");

    const form = useForm({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    function handleSignUpSubmit(data) {
        mutate(data, {
            onSuccess: (res) => {
                console.log(res);
                toast.success("Account Created Successfully", {
                    description: "Use your credentials to Sign in",
                });
                navigate("/signin");
            },
            onError: (err) => {
                console.log(err);
                
                // Handle specific error messages
                let errorMessage = "Something went wrong";
                
                if (err.status === 400) {
                    errorMessage = err.message || "Invalid input. Please check your details.";
                } else if (err.status === 409) {
                    errorMessage = "Email already exists. Please use a different email.";
                } else if (err.status === 422) {
                    errorMessage = "Please fill in all fields correctly.";
                } else if (err.status === 500) {
                    errorMessage = "Server error. Please try again later.";
                } else {
                    errorMessage = err.message || "Failed to create account";
                }
                
                toast.error("Sign Up Failed", {
                    description: errorMessage,
                });
            }
        });
    }

    return { form, handleSignUpSubmit, pending };
};

export { useSignUpForm };