import { FC } from 'react';
import { Layout } from '../../components';
import { Login } from '../../components/Forms/Login';



const LoginPage:FC =()=>{ 

    return (  
        <Layout page ='Login' hideNav>
            <div className="d-flex flex-column align-items-center justify-content-center mt-5">
            <Login/> 
            </div>
        </Layout>
    )
}
export {LoginPage};
