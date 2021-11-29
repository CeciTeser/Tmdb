import { mapToArray } from "../../helpers";
import { User } from "../../types";
import { apiFirebase } from "../../utils/axios";


const getUsers = async (): Promise<User[]> => {
    const response = await apiFirebase.get("/users.json");
    return mapToArray(response.data);
};

export { getUsers };
