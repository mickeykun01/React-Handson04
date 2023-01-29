import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Student =() =>{
    return(
        <>
        
        <div className='change'>
        <ul>
            <li> <Link id='none' to="/">Home</Link> </li>
            <li> <Link id='none' to="/student">Student</Link> </li>
            <li> <Link id='none' to="/contact us">ContactUs</Link></li>
        </ul>
        </div>
        
       <div className='header'>
            <h1>Students Details</h1>
            <button type='onClick' className='fix'>Add new Students</button>
        </div>

        <div className='table-style'>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
                <tr>
                    <td>John</td>
                    <td>26</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td>  <a href="">Link</a></td>
                </tr>
                <tr>
                    <td>Doe</td>
                    <td>27</td>
                    <td>MERN</td>
                    <td>November</td>
                    <td>  <a href="">Link</a></td>
                </tr>
                <tr>
                    <td>Sameer</td>
                    <td>29</td>
                    <td>MERN</td>
                    <td>March</td>
                    <td>  <a href="">Link</a></td>
                </tr>
                <tr>
                    <td>Jason</td>
                    <td>22</td>
                    <td>MERN</td>
                    <td>April</td>
                    <td>  <a href="">Link</a></td>
                </tr>
                <tr>
                    <td>Saurab</td>
                    <td>26</td>
                    <td>MERN</td>
                    <td>January</td>
                    <td>  <a href="">Link</a></td>
                </tr>
                <tr>
                    <td>Soumya</td>
                    <td>31</td>
                    <td>MERN</td>
                    <td>May</td>
                    <td>  <a href="">Link</a></td>
                </tr>
                <tr>
                    <td>Sanjay</td>
                    <td>21</td>
                    <td>MERN</td>
                    <td>May</td>
                    <td>  <a href="">Link</a></td>
                </tr>
            </table>
        </div>
        </>
    )
}
export default Student