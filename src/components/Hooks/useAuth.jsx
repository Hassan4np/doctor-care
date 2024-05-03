import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProdiver";


const useAuth = () => {
    const authcontent = useContext(AuthContext);
    return authcontent;
};

export default useAuth;