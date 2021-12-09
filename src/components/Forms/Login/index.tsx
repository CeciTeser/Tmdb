import { FC } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { validationSchema } from "./validation-schema";
import { yupResolver } from '@hookform/resolvers/yup';
import { defaultValues } from './default-values';
import { useAuth } from "../../../hooks";



import './styles.scss';


const Login:FC =()=>{

    const { login } = useAuth();
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
            push('/')
        } catch (err) {
            console.log('error', err);
            }
    }

    return (
        <div className="conteiner-fluid" >
                <form action="" className='login-form d-flex flex-column align-items-center justify-content-between' onSubmit={handleSubmit (onSubmit)} >
                    <h2>CINEMA</h2>
                    <div className=" d-flex flex-column align-items-center justify-content-center ">
                        <label htmlFor="email" className="pb-2">EMAIL: </label>
                        <input 
                            id="email" 
                            type="email"  
                            placeholder="ENTER YOUR EMAIL" 
                            required
                            {...register('email')}
                        />
                        {errors.email?.message}
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-center ">
                        <label htmlFor="password" className="pb-2">PASSWORD: </label>
                        <input 
                            id="password" 
                            type="password" 
                            placeholder="ENTER YOUR PASSWORD" 
                            required 
                            {...register('password')}  
                        />
                        {errors.password?.message}
                    </div>
                    <button type="submit">LOGIN</button>
                    <p>Don't have an account? <Link to="/signup">SIGN UP</Link></p>
                </form>
            </div>   
    )

};

export { Login }