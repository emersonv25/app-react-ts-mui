import { Navigate, Route, Routes } from "react-router-dom"
import { About } from "../pages/About"
import { Forgot } from "../pages/Forgot"
import { Home } from "../pages/Home"
import { SignIn } from "../pages/Login"
import { SignUp } from "../pages/Register"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Login' element={<SignIn/>}/>
            <Route path='/Register' element={<SignUp/>}/>
            <Route path='/forgot' element={<Forgot/>}/>
            <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
    )
}