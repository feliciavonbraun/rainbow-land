import { Button, FormControl, TextField } from "@material-ui/core";
import { useState } from "react";
import { CSSProperties, useEffect } from "react";
import { makeRequest } from "../../../makeRequest";

// interface NewUser {
//     username: string,
//     password: string
// }


function LoginPage() {
    // Fetching all users in DB 
    const [ user, setUser] = useState([]);
    useEffect(() => {
        const fetchUser = async () => {
            const user = await makeRequest("/api/user", "GET")
            setUser(user)
        }
        fetchUser();
    }, []);


    // // Add new user
    // const [ newUser, setNewUser ] = useState<NewUser>({
    //     username: '',
    //     password: ''
    // });
    // useEffect(() => {
    //     const body = {
    //         "username": ,
    //         "password": ''
    //     }
    //     const addUser = async () => {
    //         const newUser = await makeRequest("/api/user/add", "POST", body)
    //         setUser(newUser)
    //     }
    //     addUser();
    // }, []);





    return (
        <FormControl style={form}>
            <TextField type='text' label="Username" required></TextField>
            <TextField 
                type='password' 
                label="Password" required
                //value={newUser.password}
                //onChange={(event) => setNewUser(event.target.value, 'password')}
                ></TextField>
            <Button
                style={{ marginTop: '1rem' }}
                type='submit'
                variant='contained'
                color='secondary'
                onClick={() => {console.log(user)}}
            >
                Sign In
            </Button>
        </FormControl>
    )
}
export default LoginPage;

const form: CSSProperties = {
    width: '60%',
    padding: '1rem',
}

