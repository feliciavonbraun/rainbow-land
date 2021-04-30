import { Box, Button, Grid, TextField } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { useContext, useState, } from "react";
import { LoginContext } from "../../../contexts/loginContext";
import { PostContext } from "../../../contexts/postsContext";
import PostCard from "./postCard";

interface Props {
    carouselName: string,
};

function AllPosts(props: Props){   
    const { username } = useContext(LoginContext);
    const { posts, createNewPost } = useContext(PostContext);
    
    const [isOpen, setIsOpen] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [commentExist, setCommentExist] = useState(false)
    const [rating, setRating] = useState(2)

    const thisCarouselPosts = posts.filter((post) => post.carouselTag === props.carouselName);

    function handleAddPost() {
        createNewPost( rating, newComment, props.carouselName);
        setIsOpen(false);
        setCommentExist(true);
    };

    function handleUpdateRating(updatedRating: number) {
        setRating(updatedRating);
    };

    return (
        <Box>
            {username && !isOpen && !commentExist &&
                <Button
                    variant='contained'
                    color='secondary'
                    style={{ margin: '2rem 0 1rem 0' }}
                    onClick={() => setIsOpen(true)}
                >
                    Create Post
                </Button>
            }
            {isOpen && (
                <Box 
                    display='flex'
                    flexDirection='column' 
                    padding='1rem'
                    style={{ boxShadow: '5px 5px 10px #BDBDBD' }}
                >
                    <Rating
                        name={username}
                        value={rating}
                        onChange={(event, newRating) => {
                            if (newRating)
                            setRating(newRating)
                        }}
                    />
                    <TextField
                        type='text'
                        multiline
                        label='Comment'
                        value={newComment}
                        onChange={(event) => setNewComment(event.target.value) }
                    />
                    <Box marginTop='2rem' 
                        display='flex'
                        justifyContent='space-between'
                    >
                        <Button
                            onClick={() => setIsOpen(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={ () => handleAddPost() }
                        >
                            Add
                        </Button>
                    </Box>
                </Box>
            )}
            <Box marginTop='3rem'>
            <Grid
                container
                spacing={5}
             >
                {thisCarouselPosts.map((post, i) =>
                        <PostCard 
                            key={i}
                            post={post}
                            removeCommentExist={() => setCommentExist(false)}
                            removeComment={() => setNewComment('')}
                            existingRating={rating}
                            updateRating={handleUpdateRating}
                        />
                    )}
            </Grid>
            </Box>
        </Box>
    )
};
export default AllPosts;