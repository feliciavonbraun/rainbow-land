import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import { Rating } from "@material-ui/lab";
import { Box, Typography } from "@material-ui/core";

interface Props {
    carouselName: string | undefined
}

function CarouselInfo(props: Props) {
    // Rating ska baseras på användarnas betyg
    const rating = 2;

    return (
        <Box>
            <Typography variant='h2'>
                {props.carouselName}
            </Typography>
            <Typography>
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

    )
}

export default CarouselInfo