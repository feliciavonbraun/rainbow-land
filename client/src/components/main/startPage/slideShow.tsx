import { CSSProperties } from '@material-ui/styles'
import MainCarousel from '../../../assets/carouselPics/mainCarousel.jpg'

// TODO: Importera carousel från material UI
function SlideShow() {
    return (
        <div style={rootStyle}>
            <img style={carouselStyle}src={MainCarousel} alt="" />
        </div>
    )
}

const rootStyle: CSSProperties = {
    width: '100%',
};

const carouselStyle: CSSProperties = {
    width: '100%',
    objectFit: 'cover',
};

export default SlideShow