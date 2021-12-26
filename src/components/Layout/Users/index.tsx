import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, processUsers } from "../../../redux/actions/users";
import { User } from "../../../types";


type UserStore={
    users:{
        data: User[],
    }
}


const Users:FC=()=>{

    const dispatch = useDispatch()
    

    const {data} = useSelector((state:UserStore)=> state.users)


    

    useEffect (()=>{
        dispatch(processUsers())
    
    },[dispatch])


    return(
            <div>
            <table className="table">
                <thead>
                    <tr>
                    <th>USER ID</th>
                    <th>USER NAME</th>
                    <th>USER LASTNAME</th>
                    <th>USER BIRTHDAY</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((users) => {
                    return (
                <tr key={users.idDB}>
                    <td>{users.name}</td>
                    <td>{users.lastName}</td>
                    <td>{users.email}</td>
                    <td>{users.birthday}</td>
                    <td><button onClick={() => dispatch (deleteUsers(users.idDB))}> DELETE </button></td>
                </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}

export {Users}