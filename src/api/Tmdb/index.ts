import { Item } from "../../types";
import { apiTmdb } from "../../utils/axios";


const getTopRated = async (): Promise<Item[]> => {
    const response = await apiTmdb.get("/movie/top_rated?");
    return response.data;
};

export { getTopRated };
