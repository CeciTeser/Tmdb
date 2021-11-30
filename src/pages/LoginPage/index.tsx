import { FC } from 'react';
import { Layout } from '../../components';
import { Login } from '../../components/Forms/Login';
import { useDispatch, useSelector } from "react-redux";
import { processAuth } from "../../redux/actions/auth";
import { User } from '../../types';

// type Store={
//     auth:{
//         data: User[],
//     }
// }


const LoginPage:FC =()=>{

    const dispatch = useDispatch()
    dispatch(processAuth());


    // const {data} = useSelector((state:Store)=> state.auth)

    // console.log('data', data)    

    return (  
        <Layout page ='Login' hideNav>
            <Login/> 
        </Layout>
    )
}
export {LoginPage};
