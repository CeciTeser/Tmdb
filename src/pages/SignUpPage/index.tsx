import { FC } from 'react';
import { Layout } from '../../components';
import {Signup} from '../../components/Forms/Signup';




const SignUpPage:FC =()=>{

    return (  
        <Layout page ='Signup' hideNav>
            <Signup/> 
        </Layout>
    )
}
export {SignUpPage};
