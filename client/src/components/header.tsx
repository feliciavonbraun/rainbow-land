import { Button, Typography } from "@material-ui/core";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={rootStyle}>
            <Typography variant='h1'>Rainbow Land</Typography>
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
    height: '3rem',
};

const loginButton: CSSProperties = {
    position: 'absolute',
    right: '3rem',
    textDecoration: 'none',
};

export default Header;