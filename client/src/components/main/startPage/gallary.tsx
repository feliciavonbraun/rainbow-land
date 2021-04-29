import { Box } from "@material-ui/core";
//import { CSSProperties } from "@material-ui/styles";
import galleryTransition from "../../../assets/galleryTransition.svg"

function Gallery() {
    return (
        <Box position='relative'>
            <Box marginBottom='-0.3rem'>
                <img src={galleryTransition} alt="" />
            </Box>
            {/* <Typography variant='h2' style={title}>
                Gallery
            </Typography> */}
            <Box
                // height='20rem'
                bgcolor='var(--clrBlue)'
            >

            </Box>
        </Box>
    );
};

// const title: CSSProperties = {
//     position: 'absolute',
//     marginLeft: '10%',
// };

export default Gallery;