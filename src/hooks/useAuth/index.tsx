import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { currentUserDenied, currentUserOk } from "../../redux/actions/currentUser";

import { signup } from "../../components/Forms/Signup/api";

import { mapToArray } from "../../helpers";

import { User } from "../../types";

import { apiFirebase } from "../../utils";




type CurrentUserStore = {
    currentUser: User;

};

const useAuth = () => {

    const dispatch = useDispatch()

    const [tokenStorage, setTokenStorage] = useState<string | undefined>(
        localStorage.getItem("token") || undefined
    );


    const [hasUserLoggedIn, setHasUserLoggedIn] = useState<boolean>();

    const currentUser = useSelector((state:CurrentUserStore)=> state.currentUser)

    const { push } = useHistory();

    useEffect(() => {
        if (tokenStorage) localStorage.setItem("token", tokenStorage);
    }, [tokenStorage]);
    
    
    useEffect(() => {
        loginWithToken();  
    }, []);


    const createUserToken = async (user: User): Promise<string | null> => {
        const newToken = Math.random().toString(36).substr(2);

        try {
        await apiFirebase.patch(`/users/${user.idDB}.json`, { sessionToken: newToken });
        return newToken;
        } catch (err) {
        return null;
        }
    };
    
    const login = async (email: string, password: string) => {
        try {
        const response = await apiFirebase.get("/users.json");

        const users: User[] = mapToArray(response.data);

        const user = users.find(
            (user) => user.email === email && user.password === password
        );


        if (user) {
            const token = await createUserToken(user);
            localStorage.setItem("role", user.role)
            localStorage.setItem("userid", user.idDB)
            
    
            if (token) {
            setTokenStorage(token);
            dispatch(currentUserOk(user))

            } else {
                setHasUserLoggedIn(false);
            }
        } else {
            throw new Error("The user doesn`t exist");
        }
        } catch (e) {
        
        }

    };

    const loginWithToken = async () => {
        let user;
        try {
        const response = await apiFirebase.get("/users.json");

        const users: User[] = mapToArray(response.data);

        if (tokenStorage) {
            user = users.find((user) => user.sessionToken === tokenStorage);
        }

        if (user) {
            dispatch(currentUserOk(user))
            setHasUserLoggedIn(true);   
        } else {
            setHasUserLoggedIn(false);
        }
        } catch (error) {
            throw new Error("The user doesn`t exist");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        dispatch(currentUserDenied(undefined))
        push('/login');
    };

    const signUp = async(data: User) => {
        try {
            await signup(data);
            push('/login');
            
        } catch (err) {
            throw new Error("Error. Try again");
            }
    };


    return { login, loginWithToken, logout, signUp, hasUserLoggedIn, currentUser};
};

export { useAuth };
