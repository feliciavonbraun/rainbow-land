import { Box, Button, Grid, Modal } from "@material-ui/core";
import { useState } from "react";
import AddOrEditPost from "./addOrEditPost";
import PostCard from "./postCard";


// Posts exempel. Byts ut till back-end.
const fakePosts = [
    {
        title: 'hej',
        image: 'https://images.pexels.com/photos/136412/pexels-photo-136412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptates quas et voluptate saepe? Cupiditate provident dolor mollitia necessitatibus culpa!'
    },
    {
        title: 'på',
        image: 'https://images.pexels.com/photos/749061/pexels-photo-749061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptates quas et voluptate saepe? Cupiditate provident dolor mollitia necessitatibus culpa!'
    },
    {
        title: 'dig',
        image: 'https://images.pexels.com/photos/784917/pexels-photo-784917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        comment: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut voluptates quas et voluptate saepe? Cupiditate provident dolor mollitia necessitatibus culpa!'
    },
];


function AllPosts() {
    const [open, setOpen] = useState(false)

    const handleClickForModal = () => {
        setOpen(!open)
    }

    return (
        <Box>
            <Button
                variant='contained'
                color='secondary'
                style={{ margin: '2rem 0 1rem 0' }}
                onClick={() => setOpen(true)}
            >
                Create Post
            </Button>
            <Grid
                container
                spacing={5}
            >
                {fakePosts.map((post, index) =>
                    <PostCard
                        post={post}
                        index={index}
                        onClick={handleClickForModal}
                    />
                )}
            </Grid>

            {open && (
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <AddOrEditPost 
                        onClick={handleClickForModal}
                    />
                </Modal>
            )}
        </Box>
    )
}

export default AllPosts;