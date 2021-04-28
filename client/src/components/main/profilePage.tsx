import { Button } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../loginContext";


function ProfilePage() {
    const { logoutUser } = useContext(LoginContext);

    return(
        <main style={rootStyle}>
            <Link to='/'>
                <Button style={goBackBtn}>Go back</Button>
            </Link>
            <Button
                style={{ marginTop: '1rem' }}
                type='submit'
                variant='contained'
                color='secondary'
                onClick={logoutUser}
            >
                Logout
            </Button>
            <Button
                style={{ marginTop: '1rem' }}
                type='submit'
                color='secondary'
            >
                Delete account
            </Button>
        </main>
    )
}

const rootStyle: CSSProperties = {
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative'

}

const goBackBtn: CSSProperties = {
    position: 'absolute',
    top: '2rem',
    left: '2rem'
}

export default ProfilePage;