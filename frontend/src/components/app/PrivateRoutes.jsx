
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {token} = useSelector((state)=>state.auth);
    const navigate = useNavigate();
    if(token === null){
        return navigate('/login');
    }else{
        return children;
    }
    
}

export default PrivateRoutes