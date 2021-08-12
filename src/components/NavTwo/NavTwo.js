import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavTwo.css'

export default function NavTwo() {
    return (
    <nav class="navbar navtwo">
        <div class="container-fluid">
             <ul class="nav navbar-nav">
                 <li class="dropdown">
                     <NavLink class="dropdown-toggle" data-toggle="dropdown" to="#">Courses &nbsp;<span className="caret"></span></NavLink>
                     <ul class="dropdown-menu">
                        <li><NavLink to="#">Mathematics</NavLink></li>
                        <li><NavLink to="#">Science</NavLink></li>
                        <li><NavLink to="#">English</NavLink></li>
                     </ul>
                 </li>
                 <li><NavLink to="#">Services</NavLink></li> 
                 <li><NavLink to="#">Careers at Profese</NavLink></li>
             </ul> 

             <ul class="logo nav navbar-nav navbar-center">
                 <li><img class="img-responsive" style={{height: "60px"}} src="https://profilersuzanne.com/wp-content/uploads/2018/02/logo-dummy.png" alt="logo"/></li>
             </ul>

             <ul class="nav navbar-nav navbar-right">
                 <li><NavLink to="#">Support</NavLink></li>
                 <li><NavLink to="/login">Login</NavLink></li>
                 <li><NavLink to="/signup">Signup</NavLink></li>
             </ul>
        </div>
     </nav>
    )
}


// <div className="navtwo">

// <div className="navtwo_section">

//     <div className="navtwo_courses">
//         <button className="navtwo_dropdn">Courses</button>
//         <div className="dropdn-content">
//             {/* here we fetch data from backend and replace */}
//              <p>Mathematics: </p>
//              <NavLink to="/">Algebra</NavLink >
//              <NavLink to="/">Geometry</NavLink >
//              <NavLink to="/">Calculus</NavLink >
//         </div>
//     </div>

//     <div className="navtwo_services">
//         <NavLink className="link" to="/">Services</NavLink>
//     </div>

//     <div className="navtwo_careers">
//         <NavLink className="link" to="/">Careers at Profese</NavLink>
//     </div>
// </div>

// <div className="navtwo_logo">
//     <NavLink to="/">logo img</NavLink>
// </div>

// <div className="navtwo_section">
//     <div className="navtwo_support">
//         <NavLink className="link" to="/">Support</NavLink>
//     </div>
//     <div className="navtwo_login">
//         <NavLink className="link" to="/login">Login</NavLink>
//     </div>
//     <div className="navtwo_signup">
//         <NavLink className="link" to="/signup">SignUp</NavLink>
//     </div>
// </div>

// </div>