import { Box, Button, Grid, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import { useContext } from "react";
//import { CSSProperties } from '@material-ui/styles';
import { Post, PostContext } from "../../../postsContext";

interface Props {
    post: Post
    onClick: () => void
}

function PostCard(props: Props) {
    // Rating ska baseras på användarnas betyg
    const rating = 2;

    const { deletePost } = useContext(PostContext);

    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={3}
        >
            <Box style={{boxShadow: '5px 5px 10px #BDBDBD'}}>
                {/* <img
                    src={props.post.image}
                    alt={props.post.title}
                    style={imageStyle}
                /> */}
                <Box 
                    margin='0 1rem' 
                    paddingBottom='1rem'
                 >
                    <Typography variant='subtitle1'>
                        {props.post.username}
                    </Typography>
                    <Rating
                        name='Rating'
                        value={rating}
                        size='small'
                        readOnly
                    />
                    <Typography>
                        {props.post.description}
                    </Typography>
                    <Button 
                        variant='contained' 
                        onClick={props.onClick}
                        style={{margin: '1rem 0'}}
                    >
                        Edit
                    </Button>
                    <Button
                        variant='contained'
                        onClick={() => deletePost}
                    >
                        X
                    </Button>
                    <Button>
                        <EditRoundedIcon />
                    </Button>
                </Box>
            </Box>
        </Grid>
    );
}

// const imageStyle: CSSProperties = {
//     width: '100%',
//     objectFit: 'cover',
// };

export default PostCard;