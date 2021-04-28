import { Button } from "@material-ui/core";
import { CSSProperties, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"
import { LoginContext } from "../loginContext";

function Header() {
    const { username } = useContext(LoginContext);

    return (
        <header style={rootStyle}>
            <Link to="/">
                <img 
                    style={{width: '80%'}} 
                    src={logo} alt="Rainbow Land"
                />
            </Link>
            {username
                ? <Link to='/profile' style={loginButton}>
                    <Button
                        variant='contained'
                        color='primary'
                        size='small'
                    >
                        Profile
                    </Button>
                </Link>
                : <Link to='/accountPage' style={loginButton}>
                    <Button
                        variant='contained'
                        color='primary'
                        size='small'
                    >
                        Login
                    </Button>
                </Link>
            }
        </header>
    )
}

const rootStyle: CSSProperties = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '4rem',
};

const loginButton: CSSProperties = {
    position: 'absolute',
    right: '3rem',
    textDecoration: 'none',
};

export default Header;