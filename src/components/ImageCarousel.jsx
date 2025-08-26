import { UseState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ImageCarousel.css"

const images = [
    "carrosel1.jpg",
    "carrosel2.jpg",
    "carrosel3.jpg",
    "carrosel4.jpg",
    "carrosel5.jpg",
    "carrosel6.jpg",
    "carrosel7.jpg",
    "carrosel8.jpg",
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