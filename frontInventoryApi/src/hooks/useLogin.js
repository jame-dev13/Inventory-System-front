import axios from "axios";
import { useState } from "react";
import { CONFIG } from "../../config"
const useLogin = () => {
	const url = CONFIG.routes.auth.login
	const [data, setData] = useState(null)
	const [error, setError] = useState(null)

	const loginHandler = async (body) => {
		try {
			const response = await axios.post(
				url,
				JSON.stringify(body),
				{ headers: { "Content-Type": "application/json" } }
			)
			const responseData = await response.data
			setData(responseData)
			return responseData
		} catch (err) {
			setError(err)
			return null
		} finally {
			setError(null)
		}
	}

	return { data, error, loginHandler }
};

export default useLogin;