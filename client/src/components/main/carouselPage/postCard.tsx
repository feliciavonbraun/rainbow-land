import { Box, Button, Grid, Modal, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import DeleteIcon from '@material-ui/icons/Delete';
import { useContext, useEffect, useState } from "react";
//import { CSSProperties } from '@material-ui/styles';
import { Post, PostContext } from "../../../postsContext";
import { LoginContext } from "../../../loginContext";
import AddOrEditPost from "./addOrEditPost";

interface Props {
    post: Post,
    handleModal: () => void,
    isOpen: boolean,
    clickedButton: string
    handleButtonClick: (e: any) => void,
}

function PostCard(props: Props) {
    // Rating ska baseras på användarnas betyg
    const rating = 2;

    const { username } = useContext(LoginContext);
    const { deletePost } = useContext(PostContext);

    const [postId, setPostId] = useState('');
    
    useEffect(() => {
        setPostId(props.post._id)
    },[props.post._id])

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
                    {username &&
                        <Box
                            display='flex'
                            justifyContent='space-between'
                        >
                            <Button
                                variant='contained'
                                onClick={(e) => {props.handleButtonClick(e); props.handleModal()}}
                                style={{ margin: '1rem 0' }}
                            >
                                Edit
                            </Button>
                            <Button
                                onClick={() => deletePost(props.post._id)}
                            >
                                <DeleteIcon />
                            </Button>
                        </Box>
                    }
                </Box>
                {props.isOpen && (
                    <Modal
                        open={props.isOpen}

                    >
                        <AddOrEditPost
                            closeModal={props.handleModal}
                            addOrUpdate={props.clickedButton}
                            postId={postId}
                        />
                    </Modal>
                )}
            </Box>
        </Grid>
    );
}

// const imageStyle: CSSProperties = {
//     width: '100%',
//     objectFit: 'cover',
// };

export default PostCard;