import { FC } from "react"
import { Link } from 'react-router-dom';
import { useAuth } from "../../../hooks";


import './styles.scss';


const Nav: FC = () => {

    const { logout } = useAuth();

    return (
    
        <nav className="navbar navbar-expand-sm">
            <div className="container-fluid d-flex align-items-center justify-content-end">
                <ul className="d-flex flex-row align-items-center justify-content-between pe-2">
                    <li>
                        <Link to="/dashboard">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                    <li>
                        <Link to="/series">Series</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>

                    <button onClick={logout}>Logout</button>

                </ul>
            </div>
        </nav>
    )

}

export { Nav }
