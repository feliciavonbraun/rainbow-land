import Footer from "../../footer";
import Header from "../../header";
import Gallery from "./gallary";
import OurRides from "./ourRides";
import SlideShow from "./slideShow";

function StartPage() {
    return (
        <main>
            <Header />
            <SlideShow />
            <OurRides />
            <Gallery />
            <Footer />
        </main>
    );
}
export default StartPage; 