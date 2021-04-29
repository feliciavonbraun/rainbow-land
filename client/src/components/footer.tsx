import { Box } from "@material-ui/core";
import footerTransition from "../assets/footerTransition.svg";
import logo from "../assets/logo.svg"



function Footer() {
    return (
        <footer>
            <Box
                height='100%'
                bgcolor='var(--clrBlue)'
            > 
                <img   
                    src={footerTransition} 
                    alt="RollerCoaster"
                />
            </Box>
            <Box
                display='flex'
                justifyContent='center'
                height='7rem'
                bgcolor='var(--clrWhite)'
            >
                <img 
                    style={{width:'70%'}}
                    src={logo} 
                    alt="Rainbow Land"
                />

            </Box>
        </footer>
    )
}

export default Footer; 