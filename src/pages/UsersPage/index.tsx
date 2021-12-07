import { FC } from "react";
import { Layout } from "../../components";
import { Users } from "../../components/Layout/Users";
import { WithAuth } from "../../hoc"



const UsersPage:FC =()=>{

    return (  
        <Layout page ='Users'>
            <div className="d-flex flex-column align-items-center justify-content-center mt-5">
            <Users/> 
            </div>
        </Layout>
    )


}

export default WithAuth (UsersPage); 