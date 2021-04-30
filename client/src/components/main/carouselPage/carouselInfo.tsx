import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import { Rating } from "@material-ui/lab";
import { Box, Typography } from "@material-ui/core";
import { CSSProperties } from 'react';

interface Props {
    carouselName: string | undefined
};

function CarouselInfo(props: Props) {
    // Rating ska baseras på användarnas betyg
    const rating = 2;

    return (
        <Box position='relative'>
            <Typography variant='h2' style={h2}>
                {props.carouselName}
            </Typography>
            <Box paddingTop='5rem'>
                <Typography >
                    Rating
                </Typography>
                <Rating
                    name='Carousel rating'
                    value={rating}
                    readOnly
                />
                <Typography>
                    Tickets
                </Typography>
                <Rating
                    name='Tickets'
                    value={3}
                    icon={<ConfirmationNumberIcon htmlColor='#F8ABC7' />}
                    readOnly
                    emptyIcon={<ConfirmationNumberIcon htmlColor='#BDBDBD' />}
                />
            </Box>
        </Box>
    );
};

const h2: CSSProperties = {
    position: 'absolute',
    top: '-5rem',
};

export default CarouselInfo;