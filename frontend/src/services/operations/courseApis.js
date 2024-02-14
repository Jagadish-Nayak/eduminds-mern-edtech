import { apiConnector } from "../connectApis";
import toast from "react-hot-toast";
import { CREATE_COURSE } from "../apiList";

export function createCourse(title,desc,price,category,whatyoulearn,thumbnail,setLoading,setCurrentStep,token){
    return async (dispatch)=>{
        dispatch(setLoading(true));
        const toastId = toast.loading("Sending the file to server");
        try{
            const response = await apiConnector("POST",CREATE_COURSE,
                title,desc,price,category,whatyoulearn,thumbnail
            ,{ 
                'Authorisation':`Bearer ${token}`,
                'Content-Type':'multipart/form-data',
            });
            console.log('Response of update profile pic ',response.data);
            if(!response.data.success){
                throw new Error(response.data.message);
            }
            localStorage.removeItem("user");
            //dispatch(setUser(response.data.data));
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