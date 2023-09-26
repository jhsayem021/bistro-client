import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "./Category.css"
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/menu/drinks.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <section>
            <SectionTitle 
            subHeading={"From 11.00am to 10.00pm"}
            heading={"Order Online"}
            ></SectionTitle>
            <div className="md:inline hidden">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper md:mb-24 mb-8"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="md:text-3xl text-sm uppercase text-center md:-mt-16 -mt-5 text-white">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="md:text-3xl text-sm uppercase text-center md:-mt-16 -mt-5 text-white">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="md:text-3xl text-sm uppercase text-center md:-mt-16 -mt-5 text-white">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="md:text-3xl text-sm uppercase text-center md:-mt-16 -mt-5 text-white">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="md:text-3xl text-sm uppercase text-center md:-mt-16 -mt-5 text-white">Drinks</h3>
                </SwiperSlide>
            </Swiper>
            </div>
            <div className="md:hidden inline">
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper md:mb-24 mb-8"
            >
                <SwiperSlide>
                   <Link to="/order/salad">
                     <img src={slide1} alt="" />
                     <h3 className="md:text-3xl text-sm uppercase text-center md:-mt-16 -mt-5 text-white">Salads</h3>
                   </Link>
                    
                </SwiperSlide>
                <SwiperSlide>
                <Link to="/order/pizza">
                <img src={slide2} alt="" />
                    <h3 className="md:text-3xl text-sm uppercase text-center md:-mt-16 -mt-5 text-white">Pizzas</h3>
                   </Link>
                   
                </SwiperSlide>
                <SwiperSlide>
                <Link to="/order/sou[">
                <img src={slide3} alt="" />
                    <h3 className="md:text-3xl text-sm uppercase text-center md:-mt-16 -mt-5 text-white">Soups</h3>
                   </Link>
                   
                </SwiperSlide>
                <SwiperSlide>
                <Link to="/order/dessert">
                <img src={slide4} alt="" />
                    <h3 className="md:text-3xl text-sm uppercase text-center md:-mt-16 -mt-5 text-white">Desserts</h3>
                   </Link>
                
                </SwiperSlide>
                <SwiperSlide>
                <Link to="/order/drinks">
                <img src={slide5} alt="" />
                    <h3 className="md:text-3xl text-sm uppercase text-center md:-mt-16 -mt-5 text-white">Drinks</h3>
                   </Link>
                   
                </SwiperSlide>
            </Swiper>
            </div>
        </section>
    );
};

export default Category;