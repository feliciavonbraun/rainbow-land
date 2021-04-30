import { Box } from "@material-ui/core";
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';



import { useContext } from "react";
import { PostContext } from "../../../contexts/postsContext";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }),
);



function ImageCarousel() {

    const classes = useStyles();

    const { posts } = useContext(PostContext);

    const postImages: string[] = [];
    console.log(postImages)

    function getAllImages() {

        for (const post of posts) {
            postImages.push(post.image)
        }
    } getAllImages();


    return (
        <Box className={classes.root}>
            <GridList className={classes.gridList} cols={4}>
                {postImages.map((image, index) => (
                    <GridListTile key={index}>
                        <img src={image} alt='' />
                    </GridListTile>
                ))}
            </GridList>
        </Box>
    )
};
export default ImageCarousel;
