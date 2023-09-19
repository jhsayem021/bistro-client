
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    console.log(location)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    else if(user){
        return children;
    }
    else{
        return <Navigate to="/login" state={{from:location}} replace ></Navigate>
    }
};

export default PrivateRoutes;