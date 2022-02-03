import { FC } from 'react';

import { Layout } from '../../components';

import { Login } from '../../components/Forms/Login';


const LoginPage:FC =()=>{ 

    return (  
        <Layout page ='Login' hideNav>
            <div className="login-page">
            <Login/> 
            </div>
        </Layout>
    )
}
export {LoginPage};
