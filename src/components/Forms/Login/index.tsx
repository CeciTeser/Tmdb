import { FC } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { validationSchema } from "./validation-schema";
import { yupResolver } from '@hookform/resolvers/yup';
import { defaultValues } from './default-values';
import { useAuth } from "../../../hooks";
// import "bootstrap/dist/css/bootstrap.min.css";


const Login:FC =()=>{

    const { login } = useAuth();

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
        } catch (err) {
            console.log(err);
            }
    }



    return (
        <div className="login-form" >
                <form action="" onSubmit={handleSubmit (onSubmit)} >
                    <h2>LOGIN</h2>
                    <div>
                        <label htmlFor="email">EMAIL: </label>
                        <input 
                            id="email" 
                            type="email"    
                            placeholder="ENTER YOUR EMAIL" 
                            required
                            {...register('email')}
                        />
                        {errors.email?.message}
                    </div>
                    <div>
                        <label htmlFor="password">PASSWORD: </label>
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
                    <p>Don't have an account? <Link to="/signup">SIGN-UP</Link></p>
                </form>
            </div>   
    )

};

export { Login }