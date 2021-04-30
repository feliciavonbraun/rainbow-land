import { Box, Button, Grid, Typography, TextField } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import DeleteIcon from '@material-ui/icons/Delete';
import { useContext, useState } from "react";
//import { CSSProperties } from '@material-ui/styles';
import { Post, PostContext } from "../../../contexts/postsContext";
import { LoginContext } from "../../../contexts/loginContext";
interface Props {
    post: Post,
    removeCommentExist: () => void,
    removeComment: () => void
}

function PostCard(props: Props) {
    const { username } = useContext(LoginContext);
    const { deletePost, updatePost } = useContext(PostContext);
    const [ updatedComment, setUpdatedComment] = useState(props.post.comment)

    // Rating ska baseras på användarnas betyg
    const rating = 2;
    
    const [editFields, setEditFields] = useState(false);

    function handleClick() {
        setEditFields(!editFields);
        updatePost(props.post._id, rating, updatedComment);
    };

    function handleDeletePost() {
        deletePost(props.post._id);
        props.removeCommentExist();
        props.removeComment();
    };

    return (
        <Grid
            item
            xs={12}
            sm={6}
            md={4}
        >
            <Box style={{ boxShadow: '5px 5px 10px #BDBDBD' }}>
                {/* <img
                    src={props.post.image}
                    alt={props.post.title}
                    style={imageStyle}
                /> */}
                <Box
                    margin='0 1rem'
                    paddingBottom='1rem'
                >

                    {editFields ?
                        <Box>
                            <Typography variant='subtitle1'>
                                {props.post.username}
                            </Typography>
                            <Rating 
                                name='Rating-input' 
                                value={rating} 
                            />
                            <TextField
                                type='text'
                                value={updatedComment}
                                onChange={ (event) => setUpdatedComment(event.target.value) }
                            >
                                {props.post.comment}
                            </TextField>
                        </Box>
                        :
                        <Box>
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
                                {updatedComment}
                            </Typography>
                        </Box>
                    }

                    {username === props.post.username &&
                        <Box
                            display='flex'
                            justifyContent='space-between'
                        >
                            <Button
                                variant='contained'
                                style={{ margin: '1rem 0' }}
                                onClick={() => handleClick() }
                            >
                                {editFields === false ?
                                    'Edit'
                                    :
                                    'Update'
                                }
                            </Button>
                            <Button
                                onClick={handleDeletePost}
                            >
                                <DeleteIcon />
                            </Button>
                        </Box>
                    }
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