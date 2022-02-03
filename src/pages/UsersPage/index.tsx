import { FC } from "react";

import { Layout } from "../../components";
import { Users } from "../../components/Layout/Users";

import { WithAuth } from "../../hoc"



const UsersPage:FC =()=>{

    return (  
        <Layout page ='Users'>
            <Users/> 
        </Layout>
    )
}

export default WithAuth (UsersPage); 