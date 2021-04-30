import { Button, FormControl, TextField } from "@material-ui/core";
import {  useContext, useState } from "react";
import { CSSProperties } from "react";
import { LoginContext } from "../../../contexts/loginContext";

function SignInForm() {
    const [  inputUsername, setInputUsername ] = useState('');
    const [  password, setPassword ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState(false);
    const { login, username } = useContext(LoginContext);
    const isFormValid = inputUsername && password;
    
    const handleLogin = () => {
         login(inputUsername, password)
        if (inputUsername === username) {
            setErrorMessage(false);
        } else {
            setErrorMessage(true)
        }
    }
 
    return (
        <FormControl style={form}>
            <TextField 
                type='text' 
                value={inputUsername} 
                label="Username" 
                required
                onChange={(event) => {setInputUsername(event.target.value)}} 
                error={errorMessage}
            />
            <TextField
                type='password' 
                value={password} 
                label="Password" 
                required
                onChange={(event) => {setPassword(event.target.value)}} 
                error={errorMessage}
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
export default SignInForm;

const form: CSSProperties = {
    width: '60%',
    padding: '1rem',
};