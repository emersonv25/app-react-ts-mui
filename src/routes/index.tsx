import { Navigate, Route, Routes } from "react-router-dom"
import { About } from "../Pages/About"
import { Home } from "../Pages/Home"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>

            <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
    )
}