import { useState, useEffect } from 'react';
import axios from 'axios';

import { User } from "./types";

const defaultUsers: User[] = [];

export function Users() {
    const [users, setUsers]: [User[], (users: User[]) => void] = useState(defaultUsers);
    useEffect(() => {
        axios.get<User[]>('http://jsonplaceholder.typicode.com/users', {
            
        })
            .then(response => setUsers(response.data))
            .catch(err => console.log(err));
    }, []);
    return (
        <>
            <h1>Users</h1>
            <div>
                {users.map(user => (<div key={user.id}>{user.name} - {user.email}</div>))}
            </div>
        </>
    );
}