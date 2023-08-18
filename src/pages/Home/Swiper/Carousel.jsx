import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import icon1 from '../../../assets/electrician.png';
import icon2 from '../../../assets/painter.png';
import icon3 from '../../../assets/plumber.png';
import icon4 from '../../../assets/ac.png';
import icon5 from '../../../assets/fridge.png';
import icon6 from '../../../assets/cctv.png';
import icon7 from '../../../assets/laborer.png';
import icon8 from '../../../assets/maid.png';
import icon9 from '../../../assets/photography.png';
import icon10 from '../../../assets/male-teacher.png';
import icon11 from '../../../assets/app.png';
import { Autoplay } from 'swiper/modules';

import './Carousel.css'
import { Link } from 'react-router-dom';


const Carousel = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <div className="">
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={6}
                // centeredSlides={true}
                spaceBetween={8} // Adjust the spacing here
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 2000 }}
                className="mySwiper container md:w-[1200px] lg:container h-36 shadow-xl md:transform -translate-y-40 bg-white  rounded-lg" // Tailwind CSS classes
            >
                <SwiperSlide className="text-center hover:bg-red-300 font-bold w-10 shadow-lg flex flex-col justify-center items-center">
                    <Link to= '/electrician' className='grid justify-center justify-items-center mt-5'>
                        <img src={icon1} className="w-16 h-16 mb-2  " alt="Electrician" />
                        <h2>Electrician</h2>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="text-center hover:bg-red-300 font-bold w-10 shadow-lg flex flex-col justify-center items-center">
                    <Link to='/painter' className='grid justify-center justify-items-center mt-5'>
                        <img src={icon2} className="w-16 h-16 mb-2 " alt="Electrician" />
                        <h2>Painter</h2>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="text-center hover:bg-red-300 font-bold w-10 shadow-lg flex flex-col justify-center items-center">
                    <Link to="/plumber" className='grid justify-center justify-items-center mt-5'>
                        <img src={icon3} className="w-16 h-16 mb-2 " alt="Plumber" />
                        <h2>Plumber</h2>
                    </Link>
                </SwiperSlide>

                <SwiperSlide className="text-center hover:bg-red-300 font-bold w-10 shadow-lg flex flex-col justify-center items-center">
                    <Link to='/acRepair' className='grid justify-center justify-items-center mt-5'>
                        <img src={icon4} className="w-16 h-16 mb-2 " alt="Electrician" />
                        <h2>AC Repair</h2>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="text-center hover:bg-red-300 font-bold w-10 shadow-lg flex flex-col justify-center items-center">
                    <Link to='/freezeRepair' className='grid justify-center justify-items-center mt-5'>
                        <img src={icon5} className="w-16 h-16  mb-2 " alt="Electrician" />
                        <h2>Freeze Repair</h2>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="text-center hover:bg-red-300 font-bold w-10 shadow-lg flex flex-col justify-center items-center">
                    <Link to='/cctvRepair/' className='grid justify-center justify-items-center mt-5'>
                        <img src={icon6} className="w-16 h-16 mb-2   " alt="Electrician" />
                        <h2>CCTV Repair</h2>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="text-center hover:bg-red-300 font-bold w-10 shadow-lg flex flex-col justify-center items-center">
                    <Link to='/laborer' className='grid justify-center justify-items-center mt-5'>
                        <img src={icon7} className="w-16 h-16 mb-2   " alt="Electrician" />
                        <h2>Laborer</h2>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="text-center hover:bg-red-300 font-bold w-10 shadow-lg flex flex-col justify-center items-center">
                    <Link to='/homeMaid' className='grid justify-center justify-items-center mt-5'>
                        <img src={icon8} className="w-16 h-16 mb-2   " alt="Electrician" />
                        <h2>Home Maid</h2>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="text-center hover:bg-red-300 font-bold w-10 shadow-lg flex flex-col justify-center items-center">
                    <Link to='/photography' className='grid justify-center justify-items-center mt-5'>
                        <img src={icon9} className="w-16 h-16 mb-2   " alt="Electrician" />
                        <h2>Photography</h2>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="text-center hover:bg-red-300 font-bold w-10 shadow-lg flex flex-col justify-center items-center">
                    <Link to='/homeTutor' className='grid justify-center justify-items-center mt-5'>
                        <img src={icon10} className="w-16 h-16 mb-2   " alt="Electrician" />
                        <h2>Home Tutor</h2>
                    </Link>
                </SwiperSlide>
                <SwiperSlide className="text-center hover:bg-red-300 font-bold w-10 shadow-lg flex flex-col justify-center items-center">
                    <Link to='/allCategory' className='grid justify-center justify-items-center mt-5'>
                        <img src={icon11} className="w-16 h-16 mb-2   " alt="Electrician" />
                        <h2>All Category</h2>
                    </Link>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Carousel;
