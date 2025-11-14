export const CONFIG = {
    "routes": {
        "auth": {
            "login": `${import.meta.env.VITE_AUTH_URL}/signIn`,
            "refresh": `${import.meta.env.VITE_AUTH_URL}/refresh`,
            "logout": `${import.meta.env.VITE_AUTH_URL}/logout`
        }
    }
}