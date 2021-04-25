
import { Grid, Typography } from '@material-ui/core';
import { CSSProperties } from '@material-ui/styles';
import { Link } from 'react-router-dom';

interface Props {
    carousel: {
        image: string;
        name: string;
        link: string;
    },
    index: number
}


function CarouselCard(props: Props) {
    return (
        <Grid
            item
            key={props.index}
            xs={12}
            sm={6}
            md={3}
        >
            <Link to='#' style={noTextDecoration}>
                <img
                    src={props.carousel.image}
                    alt={props.carousel.name}
                    style={imageStyle}
                />
                <Typography align='center'>
                    {props.carousel.name}
                </Typography>
            </Link>
        </Grid>
    )
};

const noTextDecoration: CSSProperties = {
    textDecoration: 'none'
}

const imageStyle: CSSProperties = {
    width: '100%',
    objectFit: 'cover',
};

export default CarouselCard;