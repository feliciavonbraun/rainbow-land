import { Button, FormControl, TextField } from "@material-ui/core";
import { CSSProperties } from "react";


function CreateAccount() {
    return (
        <FormControl style={form}>
            <TextField type='text' label="Username" required></TextField>
            <TextField type='text' label="Password" required></TextField>
            <Button
                style={{ marginTop: '1rem' }}
                variant='contained'
                color='secondary'>Log In
                        </Button>
        </FormControl>
    )
}
export default CreateAccount;

const form: CSSProperties = {
    width: '60%',
    padding: '1rem',
}