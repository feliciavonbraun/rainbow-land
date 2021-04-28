import { Box, Button, Grid, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { CSSProperties } from '@material-ui/styles';

interface Props {
    // post: {
    //     title: string;
    //     image: string;
    //     comment: string;
    // },
    index: number,
    onClick: () => void
}

function PostCard(props: Props) {
    // Rating ska baseras på användarnas betyg
    const rating = 2;

    return (
        <Grid
            item
            key={props.index}
            xs={12}
            sm={6}
            md={3}
        >
            <Box style={{boxShadow: '5px 5px 10px #BDBDBD'}}>
                <img
                    src={props.post.image}
                    alt={props.post.title}
                    style={imageStyle}
                />
                <Box 
                    margin='0 1rem' 
                    paddingBottom='1rem'
                 >
                    <Typography variant='subtitle1'>
                        {props.post.title}
                    </Typography>
                    <Rating
                        name='Rating'
                        value={rating}
                        size='small'
                        readOnly
                    />
                    <Typography>
                        {props.post.comment}
                    </Typography>
                    <Button 
                        variant='contained' 
                        onClick={props.onClick}
                        style={{margin: '1rem 0'}}
                    >
                        Edit
                    </Button>
                </Box>
            </Box>
        </Grid>
    );
}

const imageStyle: CSSProperties = {
    width: '100%',
    objectFit: 'cover',
};

export default PostCard;