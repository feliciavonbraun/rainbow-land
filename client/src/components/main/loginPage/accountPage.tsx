import { Button, Divider, Box } from "@material-ui/core";
import { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";
import CreateAccount from "./createAccount";
import LoginPage from "./loginPage";

function AccountPage() {

    const [isToggledForm, setIsToggledForm] = useState(false);

    return (
        <Box style={rootStyle}>
            <div style={transparentLayer}></div>

            <Box style={whiteContainer}>
                <Link to='/'>
                    <Button style={{ margin: '1rem' }}>Go back</Button>
                </Link>

                <Box style={formContainer}>

                    {isToggledForm === false ?
                        <LoginPage />
                        :
                        <CreateAccount />
                    }
                    <Divider />
                    <Button
                        style={{ margin: '1rem' }}
                        variant='contained'
                        color='secondary'
                        onClick={() => setIsToggledForm(!isToggledForm)}
                    >
                        {isToggledForm === false ?
                            'Create Account'
                            :
                            'Sign in'
                        }
                    </Button>
                </Box>
            </Box>
        </Box>
    )
};
export default AccountPage;

const rootStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 5rem)', // ta minus det som headerns hight här
    width: '100%',
    backgroundImage: 'url(https://images.pexels.com/photos/1860634/pexels-photo-1860634.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
    // backgroundImage: 'url(../../../assets/loginBg.jpeg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    position: 'relative'
};

const transparentLayer: CSSProperties = {
    backgroundColor: '#ffffff9a',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    height: 'calc(100vh - 5rem)',
};

const whiteContainer: CSSProperties = {
    background: 'white',
    width: '50%',
    borderRadius: '.3rem',
};

const formContainer: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
};