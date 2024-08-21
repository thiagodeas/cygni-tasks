import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Login /> }></Route>
        </Routes>
    </BrowserRouter>
)