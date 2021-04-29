import { Box, Button, Grid } from "@material-ui/core";
import { useContext, } from "react";
import { LoginContext } from "../../../contexts/loginContext";
import { PostContext } from "../../../contexts/postsContext";
import PostCard from "./postCard";

function AllPosts(){   
    const { username } = useContext(LoginContext);
    const { posts } = useContext(PostContext);


    return (
        <Box>
            {username &&
                <Button
                    variant='contained'
                    color='secondary'
                    style={{ margin: '2rem 0 1rem 0' }}
                    >
                    Create Post
                </Button>
            }
            <Grid
                container
                spacing={5}
                >
                {posts.map((post, i) =>
                        <PostCard 
                            key={i}
                            post={post}
                        />
                    )}
            </Grid>
        </Box>
    )
}

export default AllPosts;