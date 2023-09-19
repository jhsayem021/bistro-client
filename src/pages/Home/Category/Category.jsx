import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
// import required modules

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
const Category = () => {
    return (
        <>
        <SectionTitle 
        heading = {"Order online"} 
        subHeading = {"From 11am to 10pm"}
        ></SectionTitle>
        <Swiper
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={10}
         
            pagination={{
                clickable: true,
            }}

            breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}

            modules={[FreeMode, Pagination]}
            className="mySwiper "
            
           
        >
            <SwiperSlide   >
                <img   src={slide1} alt="" />
                <h5 className='md:text-3xl  -mt-16 text-center text-white' >Salad</h5>
            </SwiperSlide>
            <SwiperSlide>
                <img className='' src={slide2} alt="" />
                <h5 className='md:text-3xl  -mt-16 text-center text-white' >Pizza</h5>
            </SwiperSlide>
            <SwiperSlide>
                <img className='' src={slide3} alt="" />
                <h5 className='md:text-3xl  -mt-16 text-center text-white' >Soup</h5>
            </SwiperSlide>
            <SwiperSlide>
                <img className='' src={slide4} alt="" />
                <h5 className='md:text-3xl  -mt-16 text-center text-white' >Dessert</h5>
            </SwiperSlide>
            <SwiperSlide>
                <img className='' src={slide5} alt="" />
                <h5 className='md:text-3xl  -mt-16 text-center text-white' >Salad</h5>
            </SwiperSlide>

        </Swiper>
        </>
    );
};

export default Category;