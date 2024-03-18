import { BrowserRouter as Router , Routes,Route } from "react-router-dom"
import MainLayout from "../layout"
import Home from "../pages/Home"
import Starred from "../pages/Starred"

export default function AppRoutes(){

    return (
        <Router>
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/starred" element={<Starred/>}/>
            </Routes>
        </MainLayout>
        </Router>
    )
}