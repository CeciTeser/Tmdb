import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, okUsers, processUsers } from "../../../redux/actions/users";
import { store } from "../../../redux/store";
import { User } from "../../../types";


type Store={
    users:{
        data: User[],
    }
}

const Users:FC=()=>{

    const dispatch = useDispatch()
    

    const {data} = useSelector((state:Store)=> state.users)


    useEffect (()=>{
        dispatch(processUsers())
    
    },[dispatch])

    // useEffect (()=>{
    //     dispatch(processUsers())
    //     store.dispatch(okUsers(data))
    // },[deleteUser])

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
                <tr key={users.id}>
                    <td>{users.name}</td>
                    <td>{users.lastName}</td>
                    <td>{users.email}</td>
                    <td>{users.birthday}</td>
                    <td><button onClick={() => dispatch (deleteUsers(users.id))}> DELETE </button></td>
                </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
}

export {Users}