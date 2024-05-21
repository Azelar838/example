import { BrowserRouter as Router , Routes,Route } from 
import MainLayout from "../layout"
import AllFiles from "../pages/AllFiles"
import Archived from "../pages/Archived"
import Home from "../pages/Home"
import Starred from "../pages/Starred"

export default function AppRoutes(){
    return (
        <Router>
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/starred" element={<Starred/>}/>
                <Route path="/archived" element={<Archived/>}/>
                <Route path="/all-files" element={<AllFiles/>}/>
            </Routes>
        </MainLayout>
        </Router>
    )
}