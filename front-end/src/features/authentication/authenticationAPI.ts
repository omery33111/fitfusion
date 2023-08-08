import axios from "axios";
import { loginURL } from "../../endpoints/endpoints";
import { Login } from "../../models/Authentication";



const login = async (userData: Login) => {
    const response = await axios.post(loginURL, userData)

    if (response.data) {
        localStorage.setItem("token", JSON.stringify(response.data))
    }

    return response.data
}

const logout = () =>
{
    localStorage.removeItem("token")
    localStorage.removeItem("is_staff")
    localStorage.removeItem("userName")
}

const authenticationService = {
    login,
    logout,
    
}

export default authenticationService