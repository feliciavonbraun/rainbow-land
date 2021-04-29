import { Button, FormControl, TextField } from "@material-ui/core";
import {  useContext, useState } from "react";
import { CSSProperties } from "react";
import { LoginContext } from "../../../contexts/loginContext";

function LoginPage() {

    const [  username, setUsername ] = useState('');
    const [  password, setPassword ] = useState('');
    const { login } = useContext(LoginContext);
    
    const handleLogin = async () => {
        await login(username, password)
    }
 
    const isFormValid = username && password;

    return (
        <FormControl style={form}>
            <TextField 
                type='text' 
                value={username} 
                label="Username" 
                required
                onChange={(event) => {setUsername(event.target.value)}} 
            />
            <TextField 
                type='password' 
                value={password} 
                label="Password" 
                required
                onChange={(event) => {setPassword(event.target.value)}} 
            />
            <Button
                style={{ marginTop: '1rem' }}
                type='submit'
                variant='contained'
                color='secondary'
                disabled = {!isFormValid}
                onClick={handleLogin}
            >
                Sign In
            </Button>
        </FormControl>
    )
};
export default LoginPage;

const form: CSSProperties = {
    width: '60%',
    padding: '1rem',
};