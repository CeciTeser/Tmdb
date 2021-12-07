import { FC } from 'react';
import { Layout } from '../../components';
import {Signup} from '../../components/Forms/Signup';




const SignUpPage:FC =()=>{

    return (  
        <Layout page ='Signup' hideNav>
            <div className="d-flex flex-column align-items-center justify-content-center mt-5">
            <Signup/> 
            </div>
        </Layout>
    )
}
export {SignUpPage};
 