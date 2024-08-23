import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Container } from "./components/Container"
import { Register } from "./pages/Register"

export const AppRoutes = () => (
    <BrowserRouter>
        <Container>
        <Routes>
            <Route path="/" element={ <Login /> }></Route>
            <Route path="/register" element={ <Register /> }></Route>
        </Routes>
        </Container>
    </BrowserRouter>
)