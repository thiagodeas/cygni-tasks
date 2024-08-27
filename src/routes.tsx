import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Container } from "./components/Container"
import { Register } from "./pages/Register"
import { Dashboard } from "./pages/Dashboard"

export const AppRoutes = () => (
    <BrowserRouter>
        <Container>
        <Routes>
            <Route path="/" element={ <Login /> }></Route>
            <Route path="/register" element={ <Register /> }></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
        </Container>
    </BrowserRouter>
)