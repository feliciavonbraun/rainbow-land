import { Box, Button, Grid } from "@material-ui/core";
import { useContext, useState } from "react";
import { LoginContext } from "../../../contexts/loginContext";
import { PostContext } from "../../../contexts/postsContext";
import PostCard from "./postCard";

function AllPosts(){   
    const [open, setOpen] = useState(false);
    const [clickedButton, setClickedButton] = useState('');

    const { username } = useContext(LoginContext);
    const { posts } = useContext(PostContext);

    function handleModal() {
        setOpen(!open)
    }
    
    function handleClickedButton(e: any) {
        setClickedButton(e.target.innerHTML)
    }

    return (
        <Box>
            {username &&
                <Button
                    variant='contained'
                    color='secondary'
                    style={{ margin: '2rem 0 1rem 0' }}
                    onClick={(e) => {handleClickedButton(e); setOpen(true)}}
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
                            handleModal={handleModal}
                            isOpen={open}
                            clickedButton={clickedButton}
                            handleButtonClick={(e: any) => handleClickedButton(e)}
                        />
                    )}
            </Grid>
        </Box>
    )
}

export default AllPosts;


// Posts exempel. Byts ut till back-end.
// const fakePosts = Fakepost = [
//     {
//         title: 'hej',
//         image: 'https://images.pexels.com/photos/136412/pexels-photo-136412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptates quas et voluptate saepe? Cupiditate provident dolor mollitia necessitatibus culpa!'
//     },
//     {
//         title: 'på',
//         image: 'https://images.pexels.com/photos/749061/pexels-photo-749061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptates quas et voluptate saepe? Cupiditate provident dolor mollitia necessitatibus culpa!'
//     },
//     {
//         title: 'dig',
//         image: 'https://images.pexels.com/photos/784917/pexels-photo-784917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptates quas et voluptate saepe? Cupiditate provident dolor mollitia necessitatibus culpa!'
//     },
// ];