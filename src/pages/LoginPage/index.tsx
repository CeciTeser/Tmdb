import { FC } from 'react';
import { Layout } from '../../components';
import { Login } from '../../components/Forms/Login';

import './styles.scss';



const LoginPage:FC =()=>{ 

    return (  
        <Layout page ='Login' hideNav>
            <div className="login-page d-flex align-items-center justify-content-center">
            <Login/> 
            </div>
        </Layout>
    )
}
export {LoginPage};
