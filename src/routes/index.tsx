import { Navigate, Route, Routes } from "react-router-dom"
import { About } from "../pages/About"
import { Home } from "../pages/Home"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>

            <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
    )
}