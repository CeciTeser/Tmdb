import { FC } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { validationSchema } from "./validation-schema";
import { yupResolver } from '@hookform/resolvers/yup';
import { defaultValues } from './default-values';
import { useAuth } from "../../../hooks";
import logoBlanco from '../../../assets/img/LogoBlanco.svg'


import './styles.scss';


const Login:FC =()=>{

    const { login, currentUser } = useAuth();
    const { push } = useHistory();

    const {
        register, 
        formState: {errors},
        handleSubmit
        } = useForm <{ email:string; password: string}> ({
        resolver: yupResolver (validationSchema),
        defaultValues,
    })

    const onSubmit = async (data: { email:string; password: string}) =>  {

        try {
            await login(data.email, data.password);
            const userid= localStorage.getItem("userid")
            push(`/user:${userid}`)
        } catch (err) {
            console.log('error', err);
            }
    }


    return (
        <form action="" className='login-form d-flex flex-column align-items-center' onSubmit={handleSubmit (onSubmit)} >
            <img src={logoBlanco} alt="logoblanco"/>
            <div className="d-flex flex-column align-items-center justify-content-center ">
                <label htmlFor="email" className="form-label"></label>
                <input 
                    id="email" 
                    type="email" 
                    className="text-white"
                    placeholder="ENTER YOUR EMAIL" 
                    required
                    {...register('email')}
                />
                {errors.email?.message}
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center ">
                <label htmlFor="password" className="form-label"></label>
                <input 
                    id="password" 
                    type="password" 
                    className="text-white"
                    placeholder="ENTER YOUR PASSWORD" 
                    required 
                    {...register('password')}  
                />
                {errors.password?.message}
            </div>
            <button type="submit">LOGIN</button>
            <p>NO ACCOUNT? <Link to="/signup">SIGN UP!</Link></p>
        </form>
    
    )

};

export { Login }