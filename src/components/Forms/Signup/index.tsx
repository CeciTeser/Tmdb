import { FC } from "react";
import { useForm } from "react-hook-form";
import { validationSchema } from "./validation-schema";
import { yupResolver } from '@hookform/resolvers/yup';
import { defaultValues } from './default-values';
import { User } from "../../../types";
import { signup } from "./api";
import { useHistory } from "react-router";
import logoBlanco from '../../../assets/img/LogoBlanco.svg'

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

    const onSubmit = async (data: Omit<User, 'id'>) =>  {

        try {
            await signup(data)
            push("/login")
            
        } catch (e) {

        }

    }

    return (
       
        <form action="" className="signup-form d-flex flex-column align-items-center"onSubmit={handleSubmit(onSubmit)} >
            <img src={logoBlanco} alt="logoblanco"/>
            <h2>Sign Up</h2>
            <div className="d-flex flex-column align-items-center justify-content-center ">
                <label htmlFor="email"  className="form-label"></label>
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
                <label htmlFor="password"  className="form-label"></label>
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
            <div className="d-flex flex-column align-items-center justify-content-center ">
                <label htmlFor="name"  className="form-label"></label>
                <input 
                    id="name" 
                    type="text" 
                    className="text-white"
                    placeholder="ENTER YOUR NAME" 
                    required 
                    {...register('name')}  
                />
                {errors.name?.message}
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center ">
                <label htmlFor="lastname"  className="form-label"></label>
                <input 
                    id="lastname" 
                    type="text" 
                    className="text-white"
                    placeholder="ENTER YOUR LASTNAME" 
                    required 
                    {...register('lastName')}  
                />
                {errors.lastName?.message}
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center text-white ">
                <label htmlFor="birthday"  className="form-label"></label>
                <input 
                    id="birthday" 
                    type="date"
                    className="text-white"
                    placeholder="ENTER YOUR BIRTHDAY" 
                    required 
                    {...register('birthday')}  
                />
                {errors.birthday?.message}
            </div>
            <button type="submit">SIGN UP</button>
        </form>
           
    )

};

export { Signup }