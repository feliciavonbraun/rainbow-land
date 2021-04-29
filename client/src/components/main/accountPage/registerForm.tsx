import { Button, FormControl, TextField } from "@material-ui/core";
import { CSSProperties, useState } from "react";
import { Redirect } from "react-router";
import { makeRequest } from "../../../makeRequest";


function RegisterForm() {
    const [ createUsername, setCreateUsername ] = useState('');
    const [ createPassword, setCreatePassword ] = useState('');
    const [ userRegistered, setUserRegistered ] = useState(false)
    
    async function createNewUser() {
        const body = {
            username: createUsername,
            password: createPassword
        }
        const [addUser] = await makeRequest("/api/user/add", "POST", body);
        console.log(addUser);
    }

    const isFormValid = createUsername && createPassword;
  
    return (
        <FormControl style={form}>
            <TextField type='text' value={createUsername} label="Username" onChange={(event) => {setCreateUsername(event.target.value)}} required></TextField>
            <TextField type='password' value={createPassword} label="Password" onChange={(event) => {setCreatePassword(event.target.value)}} required></TextField>
        
            <Button
                style={{ marginTop: '1rem' }}
                type='submit'
                variant='contained'
                color='secondary'
                disabled = {!isFormValid}
                onClick={() => {createNewUser(); setUserRegistered(true)}}
            >
                Register
            </Button>
            {userRegistered && (
                <Redirect to='/' />
            )}
        </FormControl>
    )
};
export default RegisterForm;

const form: CSSProperties = {
    width: '60%',
    padding: '1rem',
};