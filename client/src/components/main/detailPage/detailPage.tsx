import { Box } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";
import { carousels } from "../../mockedInterfaceCarousels";
import CarouselInfo from "./carouselInfo";
import AllPosts from "./allPosts";
import Header from "../../header";


function DetailPage(){
    const urlPath = window.location.pathname;
    const carouselId = Number(urlPath.split('/')[2]);
    const carousel = carousels.find(carousel => carousel.id === carouselId);
    
    return (
        <main>
            <Header />
            <Box height='50vh'>
                <img style={imageStyle} src={carousel?.image} alt={carousel?.name} />
            </Box>
            <Box width='80%' margin='0 auto'>
                <CarouselInfo carouselName={carousel?.name} />
                <AllPosts />
            </Box>
        </main>
    )
}

const imageStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
}

export default DetailPage; 