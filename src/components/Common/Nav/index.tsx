import { FC } from "react"

import { Link } from 'react-router-dom';

import { useAuth } from "../../../hooks";

import { Logo } from "../Logo";


import './styles.scss';


const Nav: FC = () => {

    const { logout , currentUser} = useAuth();

   
    return (
    
        <nav className="navbar navbar-light navbar-expand-lg navbar-background sticky-top mt-5 mb-5">

            <div className="container-fluid">

            <Link className="navbar-brand ps-3"to="/"> <Logo/> </Link>

            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse flex-grow-0 me-4" id="navbarSupportedContent">
             
                    <ul className="navbar-nav mb-2 mb-lg-0">

                        <li className="nav-item">
                
                            <Link className= "nav-link" to={`/dashboard/user:${currentUser.idDB}`}>HOME</Link>
                        
                        </li>

                        <li className="nav-item">

                            <Link className= "nav-link" to={`/movies/user:${currentUser.idDB}`} >MOVIES</Link>
            
                        </li>
                        
                        <li className="nav-item">

                            <Link className= "nav-link" to={`/tv/user:${currentUser.idDB}`}>SERIES</Link>
                        </li>

                        <li className="nav-item">
                    
                        {(currentUser.role==='admin') && <Link className= "nav-link" to="/users">USERS</Link>}

                        </li>

                        <li className="nav-item">
                    
                        {(currentUser.role ==='admin') &&  <Link className= "nav-link " to="/admin">ADMIN</Link>}

                        </li>
                        <button onClick={logout}>LOGOUT</button>

                    </ul>
                </div>
            </div>
        </nav>

      
    )

}


export { Nav }
