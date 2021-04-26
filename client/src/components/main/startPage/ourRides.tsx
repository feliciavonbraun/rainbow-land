import { Box, Grid, Typography } from '@material-ui/core';
import { CSSProperties } from '@material-ui/styles';
import CarouselCard from './carouselCard';

// Detta ska flyttas till carousel API
const carousels = [
    {
        image: 'https://images.pexels.com/photos/136412/pexels-photo-136412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: 'Flying carousel',
        link: ''
    }, {
        image: 'https://images.pexels.com/photos/749061/pexels-photo-749061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: 'Roller coaster',
        link: ''
    }, {
        image: 'https://images.pexels.com/photos/784917/pexels-photo-784917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: 'Ferris wheel',
        link: ''
    }, {
        image: 'https://images.pexels.com/photos/1375016/pexels-photo-1375016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        name: 'Carousel',
        link: ''
    }
]


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