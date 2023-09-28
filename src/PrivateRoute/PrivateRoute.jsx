import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading) {
        return <div>
            
        </div>
    }
    if(user) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;