import { Link, NavLink } from "react-router";

function Navbar(){
 return(

     <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary m-1">
         <a className="navbar-brand" href="#">full stack app</a>

        <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
>
    <span className="navbar-toggler-icon"></span>
   </button>

   <Link className="btn btn-outline-light ms-auto" to="/addUser">Add user</Link>
   
        </nav>
     </div>
    
 )
}

export default Navbar;