import Grid from '@material-ui/core/Grid';
import { CSSProperties } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import MainCarousel from '../../../assets/mainCarousel.jpg'

interface Carousel {
    image: string;
    alt: string;
    width: string;
    link: string;
}

function OurRides() {

    const carousels: Carousel[] = [
        {
            image: 'https://images.pexels.com/photos/136412/pexels-photo-136412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            alt: 'Flying carousel',
            width: '100%',
            link: ''
        }, {
            image: 'https://images.pexels.com/photos/749061/pexels-photo-749061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            alt: 'Roller coaster',
            width: '100%',
            link: ''
        }, {
            image: 'https://images.pexels.com/photos/784917/pexels-photo-784917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            alt: 'Ferris wheel',
            width: '100%',
            link: ''
        }, {
            image: 'https://images.pexels.com/photos/1375016/pexels-photo-1375016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            alt: 'Carousel',
            width: '100%',
            link: ''
        }
    ]

    return (
        <div >
            {/* <img src="https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="" /> */}
            {/* <img src='../assets/mainCarousel.jpg' alt=""/> */}
            <img src={MainCarousel} alt="" />

            <div style={ridesContainer}>
                <h2 style={h2}>Our Rides</h2>

                <Grid container spacing={3} >
                    {carousels.map((carousel, index) =>
                        <Grid key={index} item xs={3}>
                            <Link to={carousel.link}>
                                <img src={carousel.image} alt={carousel.alt} width={carousel.width} />
                            </Link>
                        </Grid>
                    )}

                </Grid>
            </div>
        </div>
    )
}
export default OurRides;

const ridesContainer: CSSProperties = {
    padding: '3rem 5rem',
    position: 'relative',
}
const h2: CSSProperties = {
    position: 'absolute',
    top: '-4rem',
    margin: '0',
}