import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, processUsers } from "../../../redux/actions/users";
import { User } from "../../../types";
import {Container, Table} from 'react-bootstrap'

import './styles.scss';


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
        <Container>
            <Table className="table table-style">
                <thead>
                    <tr>
                    <th >USER NAME</th>
                    <th >USER LASTNAME</th>
                    <th >USER EMAIL</th>
                    <th >USER BIRTHDAY</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((users) => {
                    return (
                <tr className="col-md-3 mb-5" key={users.idDB} >
                    <td >{users.name}</td>
                    <td > {users.lastName}</td>
                    <td >{users.email}</td>
                    <td >{users.birthday}</td>
                    <td ><button onClick={() => dispatch (deleteUsers(users.idDB))}> DELETE </button></td>
                </tr>
                    );
                })}
                </tbody>
            </Table>
        </Container>
    )
}

export {Users}