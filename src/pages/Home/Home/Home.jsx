import Adds from '../Adds/Adds';
import Swipers from '../Carousel/Swipers';
import FavouriteProvider from '../FavouriteProvider/FavouriteProvider';
import Carousel from '../Swiper/Carousel';
import Banner from '../banner/banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Carousel></Carousel>
            <FavouriteProvider></FavouriteProvider>
            <Swipers></Swipers>
            <FavouriteProvider></FavouriteProvider>
            <Adds></Adds>


        </div>
    );
};

export default Home;