import { Box, Typography, } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";
import galleryTransition from "../../../assets/galleryTransition.svg"
import ImageCarousel from "./imageCarousel";

function Gallery() {

    return (
        <Box position='relative'>
            <Box marginBottom='-0.3rem'>
                <img src={galleryTransition} alt="" />
            </Box>
            <Box
                bgcolor='var(--clrBlue)'
            >
                <Typography variant='h2' style={title}>
                    Gallery
                </Typography>
                <Box marginTop='3rem'>
                    <ImageCarousel />
                </Box>
            </Box>

        </Box >
    )
};

const title: CSSProperties = {
    marginLeft: '10%',
};

export default Gallery;