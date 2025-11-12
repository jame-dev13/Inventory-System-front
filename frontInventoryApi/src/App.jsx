import { BrowserRouter, Router } from "react-router-dom"
import LoginForm from "./views/LoginForm"
import { AppRouter } from "./router/AppRouter"

function App() {
  return (
   <BrowserRouter>
    <AppRouter />
   </BrowserRouter>
  )
}

export default App
