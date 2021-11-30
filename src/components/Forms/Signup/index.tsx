import { FC } from "react";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validation-schema";
import { yupResolver } from '@hookform/resolvers/yup';
import { defaultValues } from './default-values';
import { User } from "../../../types";
import { signup } from "./api";
import { useHistory } from "react-router";

const Signup:FC =()=>{

    const {
        register, 
        formState: {errors},
        handleSubmit
        } = useForm ({
        resolver: yupResolver (validationSchema),
        defaultValues,
    })

    const { push } = useHistory();

    const onSubmit = async (data: Omit<User, 'id role'>) =>  {

        try {
            console.log(data)
            await signup(data)
            push("/login")
            
        } catch (e) {

        }

    }

    return (
        <div className="signup-form">
                <form action="" onSubmit={handleSubmit(onSubmit)} >
                    <h2>Sign Up</h2>
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
                    <div>
                        <label htmlFor="name">NAME: </label>
                        <input 
                            id="name" 
                            type="text" 
                            placeholder="ENTER YOUR NAME" 
                            required 
                            {...register('name')}  
                        />
                        {errors.name?.message}
                    </div>
                    <div>
                        <label htmlFor="lastname">LASTNAME: </label>
                        <input 
                            id="lastname" 
                            type="text" 
                            placeholder="ENTER YOUR LASTNAME" 
                            required 
                            {...register('lastName')}  
                        />
                        {errors.lastName?.message}
                    </div>
                    <div>
                        <label htmlFor="birthday">BIRTHDAY: </label>
                        <input 
                            id="birthday" 
                            type="date"
                            placeholder="ENTER YOUR BIRTHDAY" 
                            required 
                            {...register('birthday')}  
                        />
                        {errors.birthday?.message}
                    </div>
                    <button type="submit">SIGN UP</button>
                </form>
            </div>   
    )

};

export { Signup }