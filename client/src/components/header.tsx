import { Button } from "@material-ui/core";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header style={rootStyle}>
            <h1>Rainbow Land</h1>
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
export default Header;

const rootStyle: CSSProperties = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const loginButton: CSSProperties = {
    position: 'absolute',
    right: '3rem',
    textDecoration: 'none',
}