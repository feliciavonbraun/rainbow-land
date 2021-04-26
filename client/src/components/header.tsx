import { Button } from "@material-ui/core";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"

function Header() {
    return (
        <header style={rootStyle}>
            <img 
                style={{width: '30%'}} 
                src={logo} alt="Rainbow Land"
            />
            <Link to='/loginPage/' style={loginButton}>
                <Button
                    variant='contained'
                    color='primary'
                    size='small'
                >
                    Login
                </Button>
            </Link>
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