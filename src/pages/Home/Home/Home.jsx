
import { Helmet } from "react-helmet-async";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import SliderBanner from "../SliderBanner/SliderBanner";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
           <Helmet>
        <title>food mania  | Home</title>
        
      </Helmet>
           <SliderBanner></SliderBanner>
           <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;