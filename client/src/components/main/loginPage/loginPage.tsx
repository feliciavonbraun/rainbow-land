import { Button, FormControl, TextField } from "@material-ui/core";
import { CSSProperties } from "react";
// import '../../../assets/loginBg'


function LoginPage() {
    return (
        <div style={rootStyle}>
            <div style={ contentContainer }>

                <FormControl>
                    <TextField type='text' label="Username" required></TextField>
                    <TextField type='text' label="Password" required></TextField>
                    <Button
                        variant='contained'
                        color='secondary'>Log In
                    </Button>
                </FormControl>
                ----------
                <Button
                        variant='contained'
                        color='secondary'>Log In
                </Button>
            </div>
        </div>
    )
}
export default LoginPage;

const rootStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    backgroundImage: 'url(https://images.pexels.com/photos/1860634/pexels-photo-1860634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
    // backgroundImage: 'url(./loginBg.jpeg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', 
    backgroundAttachment: 'fixed',

}

const contentContainer: CSSProperties = {
    background: 'var(--crlWhite',
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center'

}