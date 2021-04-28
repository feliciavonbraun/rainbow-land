import { Button, FormControl, TextField } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";


function ProfilePage() {
    return(
        <main>
            <FormControl style={form}>
            <TextField type='text' value='' label="Username"  required></TextField>
            <TextField type='password' value='' label="Password"  required></TextField>
            <Button
                style={{ marginTop: '1rem' }}
                type='submit'
                variant='contained'
                color='secondary'
            >
                Update
            </Button>
            <Button
                style={{ marginTop: '1rem' }}
                type='submit'
                variant='contained'
                color='secondary'
            >
                Delete
            </Button>
        </FormControl>
        </main>
    )
}

const form: CSSProperties = {
    width: '60%',
    padding: '1rem',
}

export default ProfilePage;