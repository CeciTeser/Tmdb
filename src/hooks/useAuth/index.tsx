import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { signup } from "../../components/Forms/Signup/api";
import { mapToArray } from "../../helpers";
import { User } from "../../types";
import { apiFirebase } from "../../utils";

const useAuth = () => {
    const [tokenStorage, setTokenStorage] = useState<string | undefined>(
        localStorage.getItem("token") || undefined
    );

    const [hasUserLoggedIn, setHasUserLoggedIn] = useState<boolean>();

    const { push } = useHistory();

    // const { currentUser, setCurrentUser } = useContext(AuthContext);

    useEffect(() => {
        if (tokenStorage) localStorage.setItem("token", tokenStorage);
    }, [tokenStorage]);
    
    
    useEffect(() => {
        loginWithToken();  
    }, []);


    const createUserToken = async (user: User): Promise<string | null> => {
        const newToken = Math.random().toString(36).substr(2);

        try {
        await apiFirebase.patch(`/users/${user.id}.json`, { sessionToken: newToken });
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
    
            if (token) {
            setTokenStorage(token);
            push("/");
            // setCurrentUser(user);
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
            // setCurrentUser(user);
            setHasUserLoggedIn(true);   
        } else {
            setHasUserLoggedIn(false);
        }
        } catch (e) {
        
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        // setCurrentUser(undefined);
        push('/login');
    };

    const signUp = async(data: Omit<User, 'id role'>) => {
        try {
            await signup(data);
            push('/login');
            
        } catch (err) {
            console.log(err);
            }
    };


    return { login, loginWithToken, logout, signUp, hasUserLoggedIn,};
};

export { useAuth };
