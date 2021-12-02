import { FC } from "react";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validation-schema";
import { yupResolver } from '@hookform/resolvers/yup';
import { defaultValues } from './default-values';
import { User } from "../../../types";
import { signup } from "./api";
import { useHistory } from "react-router";

import './styles.scss';

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
        <div className="conteiner-fluid">
                <form action="" className="signup-form d-flex flex-column align-items-center justify-content-between "onSubmit={handleSubmit(onSubmit)} >
                    <h2>Sign Up</h2>
                    <div className=" d-flex flex-column align-items-center justify-content-center">
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
                    <div className=" d-flex flex-column align-items-center justify-content-center">
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
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <label htmlFor="name" className="pb-2">NAME: </label>
                        <input 
                            id="name" 
                            type="text" 
                            placeholder="ENTER YOUR NAME" 
                            required 
                            {...register('name')}  
                        />
                        {errors.name?.message}
                    </div>
                    <div className=" d-flex flex-column align-items-center justify-content-center">
                        <label htmlFor="lastname" className="pb-2">LASTNAME: </label>
                        <input 
                            id="lastname" 
                            type="text" 
                            placeholder="ENTER YOUR LASTNAME" 
                            required 
                            {...register('lastName')}  
                        />
                        {errors.lastName?.message}
                    </div>
                    <div className=" d-flex flex-column align-items-center justify-content-center">
                        <label htmlFor="birthday" className="pb-2">BIRTHDAY: </label>
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