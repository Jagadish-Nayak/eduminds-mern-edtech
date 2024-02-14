import { UPDATE_PROFILE_PICTURE,UPDATE_PROFILE } from "../apiList";
import toast from "react-hot-toast";
import { setLoading } from "../../slices/profileSlice";
import { apiConnector } from "../connectApis";
import { setUser } from "../../slices/profileSlice";


export function updateProfilePhoto(formData,token){
    return async (dispatch)=>{
        dispatch(setLoading(true));
        const toastId = toast.loading("Sending the file to server");
        try{
            const response = await apiConnector("POST",UPDATE_PROFILE_PICTURE,
                formData
            ,{ 
                'Content-Type':'multipart/form-data',
                'Authorisation':`Bearer ${token}`
            });
            console.log('Response of update profile pic ',response.data);
            if(!response.data.success){
                throw new Error(response.data.message);
            }
            localStorage.removeItem("user");
            dispatch(setUser(response.data.data));
            localStorage.setItem("user",JSON.stringify(response.data.data));
            toast.success("Profile updated successfully...");
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

export function updateProfile(formData,token){
    return async (dispatch)=>{
        dispatch(setLoading(true));
        const toastId = toast.loading("Sending the file to server");
        try{
            const response = await apiConnector("POST",UPDATE_PROFILE,
                formData
            ,{ 
                'Authorisation':`Bearer ${token}`
            });
            console.log('Response of update profile pic ',response.data);
            if(!response.data.success){
                throw new Error(response.data.message);
            }
            localStorage.removeItem("user");
            dispatch(setUser(response.data.data));
            localStorage.setItem("user",JSON.stringify(response.data.data));
            toast.success("Profile updated successfully...");
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