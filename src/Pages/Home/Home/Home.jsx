import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import BistorBoss from "../BistorBoss/BistorBoss";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefRecommends from "../ChefRecommends/ChefRecommends";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
              <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistorBoss></BistorBoss>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommends></ChefRecommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;