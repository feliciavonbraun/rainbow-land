import { Box, Button, Typography } from "@material-ui/core";


function AddOrEditPost() {
    // Behöver logik för att byta mellan de olika stegen [addImage, rating, comment].

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
                height='15rem'
                bgcolor='white'
                borderRadius='.3rem'
                padding='1rem 0'
            >
                <Typography variant='h3' align='center'>
                    Add image
                </Typography>
                <Box display='flex' justifyContent='space-around'>
                    <Button>
                        Back
                    </Button>
                    <Button variant='contained' color='secondary'>
                        Next
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default AddOrEditPost;