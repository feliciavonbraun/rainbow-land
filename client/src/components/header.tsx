import { Button } from "@material-ui/core";
import { CSSProperties } from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div style={rootStyle}>
            <h1>Rainbow Land</h1>
            <Link to='/loginPage/'>
                <Button
                    variant='contained'
                    color='primary'
                >
                    Log In
                </Button>
            </Link>
        </div>
    )
}
export default Header;

const rootStyle: CSSProperties = {
    display: 'flex',
}