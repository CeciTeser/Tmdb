import { FC, useEffect } from 'react';
import { Layout } from '../../components';
import { Login } from '../../components/Forms/Login';
import { useDispatch, useSelector } from "react-redux";
import { processAuth } from "../../redux/actions/auth";
import { User } from '../../types';


type Store={
    auth:{
        data: User[],
    }
}


const LoginPage:FC =()=>{

    const dispatch = useDispatch()
    

    const {data} = useSelector((state:Store)=> state.auth)



    useEffect (()=>{
        dispatch(processAuth())

    },[dispatch])



    console.log('data', data)    

    return (  
        <Layout page ='Login' hideNav>
            <div className="d-flex flex-column align-items-center justify-content-center mt-5">
            <Login/> 
            </div>
        </Layout>
    )
}
export {LoginPage};
