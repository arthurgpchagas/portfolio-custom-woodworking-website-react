import { UseState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageCarousel.css"

const images = [
    "carousel1.jpg",
    "carousel2.jpg",
    "carousel3.jpg",
    "carousel4.jpg"
];

const ImageCarousel = () => {
    return (
        <div className="carousel-container">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{clickable: true}}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="carousel"
            >
            {images.map((img, index) => (
                <SwiperSlide key={index}>
                    <img src={img} alt={`Slide ${index}`} className="carousel-image"/>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    );
};

export default ImageCarousel;