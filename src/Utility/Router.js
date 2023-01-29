import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Student from "../Components/Student";
import ContactUs from "../Components/ContactUs";


const Router =() =>{
    return(

        <BrowserRouter>
        <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/student" element={<Student />}/>
        <Route path="/contact us" element={<ContactUs />}/>
        </Routes>

       
        </BrowserRouter>
    )
}

export default Router