import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Home =() =>{
    return(
        <>
        
         <div className='change'>
        <ul>
            <li> <Link id='none' to="/">Home</Link> </li>
            <li> <Link id='none' to="/student">Student</Link> </li>
            <li> <Link id='none' to="/contact us">ContactUs</Link></li>
        </ul>
        </div>
        
        <div>
            <h1>Home Page</h1>
        </div>
        </>
    )
}
export default Home