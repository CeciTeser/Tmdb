import { FC } from "react"
import { Link } from 'react-router-dom';
import { useAuth } from "../../../hooks";
import { Logo } from "../Logo";


import './styles.scss';


const Nav: FC = () => {

    const { logout } = useAuth();

    return (
    
        <nav className="navbar navbar-expand-lg sticky-top">

            <div className="container-fluid">

            <Link className="navbar-brand" to="/"> <Logo/> </Link>

            <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
            </button>

                <div className="collapse navbar-collapse flex-grow-0 me-4" id="navbarSupportedContent">
             
                    <ul className="navbar-nav mb-2 mb-lg-0">

                        <li className="nav-item">
                
                            <Link className= "nav-link" to="/dashboard">Home</Link>
                        
                        </li>

                        <li className="nav-item">

                            <Link className= "nav-link" to="/movies">Movies</Link>
            
                        </li>
                        
                        <li className="nav-item">

                            <Link className= "nav-link" to="/series">Series</Link>
                        </li>

                        <li className="nav-item">
                    
                            <Link className= "nav-link" to="/users">Users</Link>
                        </li>

                        <li className="nav-item">
                    
                            <Link className= "nav-link " to="/admin">Admin</Link>

                        </li>
                        <button onClick={logout}>Logout</button>

                    </ul>
                </div>
            </div>
        </nav>

      
    )

}


export { Nav }
