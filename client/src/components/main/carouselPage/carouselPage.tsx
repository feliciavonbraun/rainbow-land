import { Box } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";
import { carousels } from "../../mockedInterfaceCarousels";
import CarouselInfo from "./carouselInfo";
import AllPosts from "./allPosts";
import Header from "../../header";


function CarouselPage(){
    const carouselId = Number(window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
    const carousel = carousels.find(carousel => carousel.id === carouselId);
    
    return (
        <main>
            <Header />
            <Box height='50vh'>
                <img style={imageStyle} src={carousel?.image} alt={carousel?.name} />
            </Box>
            <Box width='80%' margin='0 auto'>
                <CarouselInfo carouselName={carousel?.name} />
                <AllPosts carouselName={carousel?.name}/>
            </Box>
        </main>
    )
}

const imageStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
}

export default CarouselPage; 