import { Box } from "@material-ui/core";
import galleryTransition from "../../../assets/galleryTransition.svg"

function Gallery() {
    return (
        <Box position='relative'>
            <Box marginBottom='-0.3rem'>
                <img src={galleryTransition} alt="" />
            </Box>
            <Box
                bgcolor='var(--clrBlue)'
            >
            </Box>
        </Box>
    );
};

export default Gallery;