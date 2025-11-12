import axios from "axios";
import { useState } from "react";
const useLogin = () => {
    const uri = import.meta.env.VITE_SERVER_URL
    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    const login = async (body) => {
        setLoading(true);
        try {
            const response = await axios.post(
                `${uri}/auth/signIn`,
                body, {
                    headers : {"Content-Type": "application/json"}
                }
            )
            setData(response.data)
            return response.data
        } catch (error) {
            setError(error.response?.data | error.message)
            console.log(error)
            return null;
        }finally{
            setLoading(false)
        }
    }

    return { data, loading, error, login }; 
};

export default useLogin;