import { FC } from "react";
import { Nav } from '../Nav';


type Props={
    hideNav?:boolean, 
}

const Header: FC < Props > = ({hideNav}) => {

    return (
    
        <header className="container-fluid">
        {!hideNav &&  <Nav/>} 
        </header>
    
    )

}

export { Header }

