import { Typography } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";

function Gallery() {
    return (
        <div>
            <Typography variant='h2' style={title}>
                Gallery
            </Typography>
            <div style={galleryContainer}>

            </div>
        </div>
    )
}

const title: CSSProperties = {
    marginLeft: '10%',
};

const galleryContainer: CSSProperties = {
    height: '20rem',
    backgroundColor: 'var(--clrBlue)',
};

export default Gallery;