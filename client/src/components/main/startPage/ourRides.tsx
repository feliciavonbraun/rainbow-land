import { Box, Grid, Typography } from '@material-ui/core';
import { CSSProperties } from '@material-ui/styles';
import CarouselCard from './carouselCard';
import { carousels } from '../../mockedInterfaceCarousels'

function OurRides() {
    return (
        <Box 
            position='relative'
            width='80%'
            margin='2rem auto'
        >
            <Typography variant='h2' style={h2}>
                Our Rides
            </Typography>

            <Grid
                container
                spacing={2}
            >
                {carousels.map((carousel, index) =>
                    <CarouselCard 
                        carousel={carousel}
                        index={index}
                        key={index}
                    />
                )}
            </Grid>
        </Box>
    )
}

const h2: CSSProperties = {
    position: 'absolute',
    top: '-5rem',
};

export default OurRides;