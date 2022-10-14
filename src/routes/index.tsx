import { Navigate, Route, Routes } from "react-router-dom"
import { About } from "../Pages/About"
import { Home } from "../Pages/Home"
import { Lista } from "../Pages/Lista"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Lista' element={<Lista/>}/>
            <Route path='/About' element={<About/>}/>

            <Route path='*' element={<Navigate to="/"/>}/>
        </Routes>
    )
}