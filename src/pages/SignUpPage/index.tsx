import { FC } from 'react';
import { Layout } from '../../components';
import {Signup} from '../../components/Forms/Signup';

import './styles.scss';




const SignUpPage:FC =()=>{

    return (  
        <Layout page ='Signup' hideNav>
            <div className="signup-page d-flex flex-column align-items-center justify-content-center">
            <Signup/> 
            </div>
        </Layout>
    )
}
export {SignUpPage};
