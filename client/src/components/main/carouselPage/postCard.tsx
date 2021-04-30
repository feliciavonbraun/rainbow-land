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
    removeComment: () => void,
    existingRating: number,
    updateRating: (rating:number) => void
}

function PostCard(props: Props) {
    const { username } = useContext(LoginContext);
    const { deletePost, updatePost } = useContext(PostContext);
    const [ newComment, setNewComment] = useState(props.post.comment)
    const [newRating, setNewRating] = useState(props.existingRating);
    
    const [editFields, setEditFields] = useState(false);

    function handleUpdatePost() {
        updatePost(props.post._id, newRating, newComment);
        setEditFields(!editFields);
        props.updateRating(newRating)
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
                        <Box
                            display='flex'
                            flexDirection='column'
                        >
                            <Typography variant='subtitle1'>
                                {props.post.username}
                            </Typography>
                            <Rating 
                                name='Rating-input' 
                                value={newRating}
                                onChange={(event, ratingValue) => {
                                    if (ratingValue)
                                    setNewRating(ratingValue)
                                }} 
                            />
                            <TextField
                                type='text'
                                value={newComment}
                                onChange={ (event) => setNewComment(event.target.value) }
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
                                value={props.existingRating}
                                size='small'
                                readOnly
                            />
                            <Typography>
                                {newComment}
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
                                onClick={() => handleUpdatePost() }
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