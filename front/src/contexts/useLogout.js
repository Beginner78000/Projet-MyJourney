import axios from "axios";
import Auth from "./Auth";

const useLogout = () => {
    const { setIsAuthenticated } = Auth();

    const logout = async () => {
        setIsAuthenticated({});
        try {
            await axios('http://localhost:3002/api/users/logout', 
            {
                withCredentials: true
            });
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout