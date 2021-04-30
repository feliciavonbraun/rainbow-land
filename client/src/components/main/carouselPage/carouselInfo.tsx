import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import { Rating } from "@material-ui/lab";
import { Box, Typography } from "@material-ui/core";
import { CSSProperties } from 'react';
import { Carousel } from '../../mockedInterfaceCarousels';

interface Props {
    carousel: Carousel
};

function CarouselInfo(props: Props) {
    return (
        <Box position='relative'>
            <Typography variant='h2' style={h2}>
                {props.carousel.name}
            </Typography>
            <Typography>
                Price
            </Typography>
            <Rating
                name='Tickets'
                value={props.carousel.tickets}
                icon={<ConfirmationNumberIcon htmlColor='#F8ABC7' />}
                readOnly
                emptyIcon={<ConfirmationNumberIcon htmlColor='#BDBDBD' />}
            />
        </Box>
    );
};

const h2: CSSProperties = {
    position: 'absolute',
    top: '-5rem',
};

export default CarouselInfo;