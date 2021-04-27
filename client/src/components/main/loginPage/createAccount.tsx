import { Button, FormControl, TextField } from "@material-ui/core";
import { CSSProperties } from "react";

function CreateAccount() {
    return (
        <FormControl style={form}>
            <TextField type='text' label="Username" required></TextField>
            <TextField type='password' label="Password" required></TextField>
            <TextField type='password' label="Repeat Password" required></TextField>
            <Button
                style={{ marginTop: '1rem' }}
                type='submit'
                variant='contained'
                color='secondary'
            >
                Register
            </Button>
        </FormControl>
    )
};
export default CreateAccount;

const form: CSSProperties = {
    width: '60%',
    padding: '1rem',
};