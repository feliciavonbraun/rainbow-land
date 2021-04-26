import { Button, Divider, FormControl, TextField } from "@material-ui/core";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
    return (

        <div style={formContainer}>

            <FormControl style={form}>
                <TextField type='text' label="Username" required></TextField>
                <TextField type='text' label="Password" required></TextField>
                <Button
                    style={{ marginTop: '1rem' }}
                    variant='contained'
                    color='secondary'>Sign In
                        </Button>
            </FormControl>
            <Divider />
            <Link to='/'>
                <Button
                    style={{ margin: '1rem' }}
                    variant='contained'
                    color='secondary'>Create Account
                </Button>
            </Link>
        </div>

    )
}
export default LoginPage;

const formContainer: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}

const form: CSSProperties = {
    width: '60%',
    padding: '1rem',
}