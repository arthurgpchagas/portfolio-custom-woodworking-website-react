import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./AutoPlayCarousel.css"

const images = [
    "banheiro2 - auto.jpg",
    "comercial1 - auto.jpg",
    "comercial2 - auto.jpg",
    "cozinha1 - auto.jpg",
    "cozinha2 - auto.jpg",
    "cozinha5 - auto.png",
    "quarto2 - auto.jpg",
    "quarto3 - auto.jpg",
    "quarto5 - auto.jpg",
    "sala1 - auto.jpg",
    "sala4 - auto.jpg",
    "sala5 - auto.jpg",
];

const AutoPlayCarousel = () => {

    const [content, setContent] = useState({});
    
    useEffect(() => {
        fetch("contentExample.json")
            .then((response) => response.json())
            .then((data) => setContent(data))
            .catch((error) => console.error("Erro ao carregar JSON:", error));
    }, []);

    return (

        <section className="carousel-autoplay-container">
            <div className="carousel-autoplay-text">
                <div className="box-carousel-autoplay">
                    <img src="brown-line.jpg" alt="brown-line" className="brown-line"/>
                    <h2 className="title-carousel-autoplay">Conheça mais projetos</h2>
                </div>

                <p>{content.about_3}</p>
            </div>

            <div className="carousel-autoplay-image-container">
                <Swiper
                    centeredSlides={true}
                    spaceBetween={30}
                    autoplay={{delay: 2500, disableOnInteraction: false}}
                    pagination={{clickable: true}}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="carousel-autoplay"
                >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img src={img} alt={`Slide ${index}`} className="carousel-autoplay-image"/>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </section>
    )
}

export default AutoPlayCarousel;
