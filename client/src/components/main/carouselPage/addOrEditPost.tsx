import { Box, Button, FormControl, TextField, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useContext, useState } from "react";
import "../../../makeRequest";
// import { PostContext } from "../../../contexts/postsContext";
import { PostContext } from "../../../contexts/postsContext";

interface Props {
    closeModal: () => void,
    addOrUpdate: string
    postId: string
}

function AddOrEditPost(props: Props) {
    const [comment, setComment] = useState('')

    // Fixa rating
    const rating = 3

    const { createNewPost, updatePost } = useContext(PostContext);

    // Fråga: Hur kan vi uppdatera sidan när ny post läggs till?
    function handleCreateNewPost() {
        createNewPost(rating, comment)
        props.closeModal() 
    }

    function handleUpdatePost() {
        updatePost(props.postId, rating, comment) 
        props.closeModal() 
    }
    console.log(props.postId)
    return (
        <Box
            display='flex'
            width='100%'
            height='100vh'
            justifyContent='center'
            alignItems='center'
        >
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='space-between'
                width='15rem'
                bgcolor='white'
                borderRadius='.3rem'
                padding='1rem 0'
            >
                <Typography variant='h3' align='center'>
                    Review
                </Typography>
                <Box
                    display='flex'
                    flexDirection='column'
                    justifyContent='space-around'
                    alignItems='center'
                    height='10rem'
                    marginBottom='1rem'
                >
                    <FormControl>
                        <Rating name='Rating-input' value={rating}/>

                        <TextField
                            id='commentInput'
                            label='Comment'
                            multiline
                            required
                            value={comment}
                            onChange={event => setComment(event.target.value)}
                        />
                    </FormControl>
                </Box>
                <Box
                    display='flex'
                    justifyContent='space-around'
                >
                    <Button
                        onClick={props.closeModal}
                    >
                        Cancel
                    </Button>
                    {props.addOrUpdate === 'Edit'
                        ? <Button
                            variant='contained'
                            color='secondary'
                            onClick={handleUpdatePost}
                        >
                            Update
                            </Button>

                        : <Button
                            variant='contained'
                            color='secondary'
                            onClick={handleCreateNewPost}
                        >
                            Add
                            </Button>
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default AddOrEditPost;