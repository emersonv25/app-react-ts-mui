import { Navigate, Route, Routes } from "react-router-dom"
import { About } from "../pages/About"
import { Forgot } from "../pages/Forgot"
import { Home } from "../pages/Home"
import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"
import { UserPanel } from "../pages/UserPanel"
import { PrivateRoute } from "./privateRoutes"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='*' element={<Navigate to="/" />} />
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Login' element={<SignIn />} />
            <Route path='/Register' element={<SignUp />} />
            <Route path='/forgot' element={<Forgot />} />


            <Route path='/User' element={<PrivateRoute/>}>
                <Route path='/User' element={<UserPanel/>}/>
            </Route>

        </Routes>
    )
}