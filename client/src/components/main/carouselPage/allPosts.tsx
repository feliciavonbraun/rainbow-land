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
    const [newURL, setNewURL] = useState('');
    const [commentExist, setCommentExist] = useState(false);
    const thisCarouselPosts = posts.filter((post) => post.carouselTag === props.carouselName);

    const rating = 2;

    function handleAddComment() {
        createNewPost( rating, newURL, newComment, props.carouselName);
        setIsOpen(false);
        setCommentExist(true);
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
                    marginTop='2rem'
                    style={{ boxShadow: '5px 5px 10px #BDBDBD' }}
                >
                    <Rating
                        name='Rating-input'
                        value={rating}
                    />
                    <TextField 
                        type='url'
                        label='URL'
                        value={newURL}
                        onChange={(event) => setNewURL(event.target.value)}
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
                            onClick={ () => handleAddComment() }
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
                        />
                    )}
            </Grid>
            </Box>
        </Box>
    )
};
export default AllPosts;