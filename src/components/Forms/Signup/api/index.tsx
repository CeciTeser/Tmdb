import { User } from "../../../../types";
import { apiFirebase } from "../../../../utils";

export type Payload =Omit<User, 'id'>

const signup = async (data: Payload) =>{

    await apiFirebase.post('/users.json', data);
}

export { signup }; 