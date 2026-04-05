import PATH_CONFIG from "@/app/config/path.config";
import useMutation from "@/lib/hooks/useMutation";
import { useAuthContext } from "@/lib/provider/auth-context-provider";
import { AUTH_TOKEN_KEY, removeStorageItem } from "@/lib/storage-manager";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function useLogoutHandler(){

    const navigate = useNavigate();
    const {setAuthenticatedUser}=useAuthContext();

    const{mutate,pending}=useMutation(PATH_CONFIG.AUTH.LOGOUT,'POST');

    const logoutHandler=() =>{
        mutate(null,{
            onSuccess:()=>{
                removeStorageItem(AUTH_TOKEN_KEY);
                setAuthenticatedUser(prev =>({
                    ...prev,
                    isAuthenticated:false,
                    user:null
                }))
                toast("Looged out successfully",{
                    type:"success"
                })
                navigate('/',{replace:true})
            },
            onError: (err) =>{
            toast("Could not Log out",
                {
                    type:"error",
                    description: `Error: ${err.message}`
                }
            )
            }
        })

    }

    return{logoutHandler,pending}
}