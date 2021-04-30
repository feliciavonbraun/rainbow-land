
import { Grid, Typography } from '@material-ui/core';
import { CSSProperties } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { Carousel } from '../../mockedInterfaceCarousels';

interface Props {
    carousel: Carousel, 
    index: number
}

function CarouselCard(props: Props) {
    const clickedCarousel = props.carousel.id

    return (
        <Grid
            item
            key={props.index}
            xs={12}
            sm={6}
            md={3}
        >
            <Link to={'/carousel/' + clickedCarousel}  style={noTextDecoration}>
                <img
                    src={props.carousel.image}
                    alt={props.carousel.name}
                    style={imageStyle}
                />
                <Typography align='center' variant='h3'>
                    {props.carousel.name}
                </Typography>
            </Link>
        </Grid>
    );
};

const noTextDecoration: CSSProperties = {
    textDecoration: 'none',
    color: 'var(--clrBlack)',
}

const imageStyle: CSSProperties = {
    width: '100%',
    objectFit: 'cover',
};

export default CarouselCard;