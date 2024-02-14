
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const OpenRoutes = ({children}) => {
    const {token} = useSelector((state)=>state.auth);
    const navigate = useNavigate();
    if(token !== null){
        return navigate('/dashboard/my-profile');
    }else{
        return children;
    }
}

export default OpenRoutes