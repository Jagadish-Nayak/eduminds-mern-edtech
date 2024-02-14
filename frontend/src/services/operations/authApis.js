import toast from "react-hot-toast";
import { setLoading, setToken } from "../../slices/authSlice"
import { sendotpAPI,SIGNUP_API,LOGIN_API } from "../apiList"
import { apiConnector } from "../connectApis";
import { setUser } from "../../slices/profileSlice";
import { resetCart } from "../../slices/cartSlice";

export function sendOTP(email,navigate){
    return async (dispatch)=>{
        dispatch(setLoading(true));
        const toastId = toast.loading("Sending an otp to your email ID");
        try{
            const response = await apiConnector("POST",sendotpAPI,{
                email,
            });
            console.log('Response of sendOTP ',response.data);
            if(!response.data.success){
                //throw new Error(response.data.message);
                
            }
            toast.success("otp sent successfully...");
            navigate('/verify-email');
        }catch(err){
            // console.log("error occured while sending otp ",err);
            // toast.error("Couldn't send OTP")
            if(err.response){
                toast.error(err.response.data.message);
            }
        }
        dispatch(setLoading(false));
            toast.dismiss(toastId);
    }
}

export function signup(firstName,lastName,email,password,confirmPassword,accountType,otp,navigate){
    return async(dispatch)=>{
        const toastId = toast.loading("sending the data to server");
        dispatch(setLoading(true));
        try{
            const res = await apiConnector("POST",SIGNUP_API,{
                firstName,lastName,email,password,confirmPassword,accountType,otp
            });
            console.log("response of signup api",res.data);
            if(!res.data.success){
                throw new Error(res.data.message);
            }
            toast.success("User Registered successfully...");
            navigate('/login');
        }catch(err){
            if(err.response){
                toast.error(err.response.data.message);
            }
            //toast.error("Couldn't signup");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export function login(email,password,navigate){
    return async(dispatch)=>{
        const toastId = toast.loading("sending the data to server");
        dispatch(setLoading(true));
        try{
            const res = await apiConnector("POST",LOGIN_API,{
                email,password,
            });
            console.log("response of login api",res.data);
            if(!res.data.success){
                throw new Error(res.data.message);
            }
            toast.success("Logged in successfully...");
            dispatch(setUser(res.data.user));
            dispatch(setToken(res.data.token));
            localStorage.setItem("token",JSON.stringify(res.data.token));
            localStorage.setItem("user",JSON.stringify(res.data.user));
            navigate('/dashboard/my-profile');
        }catch(err){
            if(err.response){
                toast.error(err.response.data.message);
            }
            //toast.error("Couldn't logged in");
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export function logout(navigate) {
    return (dispatch) => {
      dispatch(setToken(null))
      dispatch(setUser(null))
      dispatch(resetCart())
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      toast.success("Logged Out")
      navigate("/")
    }
  }