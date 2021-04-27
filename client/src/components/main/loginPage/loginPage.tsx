import { Button, FormControl, TextField } from "@material-ui/core";
import { CSSProperties } from "react";

function LoginPage() {
    return (
        <FormControl style={form}>
            <TextField type='text' label="Username" required></TextField>
            <TextField type='password' label="Password" required></TextField>
            <Button
                style={{ marginTop: '1rem' }}
                type='submit'
                variant='contained'
                color='secondary'
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