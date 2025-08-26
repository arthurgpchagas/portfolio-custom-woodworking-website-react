import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import './ImageGrid.css';

export default function ImageGrid () {
    return (
            <div className="image-gallery-rows">
                <div className="image-gallery-columns">
                    <LightGallery
                    speed={500}
                    plugins={[lgThumbnail, lgZoom, lgVideo]}
                    mode="lg-fade"
                    >
                        <a href='banheiro1.jpg'>
                            <img alt="Banheiro" src="banheiro1.jpg" />
                        </a>
                        <a href='comercial3.jpg'>
                            <img alt="Paineis em entrada de prédio" src="comercial3.jpg" />
                        </a>
                        <a href='comercial4.png'>
                            <img alt="Loja com mesas expositoras" src="comercial4.png" />
                        </a>
                        <a href='comercial5.png'>
                            <img alt="Loja com eletrodomésticos" src="comercial5.png" />
                        </a>
                        <a href='cozinha3.jpg'>
                            <img alt="Cozinha com península" src="cozinha3.jpg" />
                        </a>
                        <a href='cozinha4.jpg'>
                            <img alt="Cozinha com lavanderia" src="cozinha4.jpg" />
                        </a>
                        <a href='quarto1.jpg'>
                            <img alt="Guarda-roupas" src="quarto1.jpg" />
                        </a>
                        <a href='quarto4.jpg'>
                            <img alt="Closet de corredor" src="quarto4.jpg" />
                        </a>
                        <a href='quarto6.jpg'>
                            <img alt="Quarto com painel ripado e guarda-roupas" src="quarto6.jpg" />
                        </a>
                        <a href='sala2.jpg'>
                            <img alt="Painel em sala de estar com cristaleira" src="sala2.jpg" />
                        </a>
                        <a href='sala3.jpg'>
                            <img alt="Painel em sala de estar" src="sala3.jpg" />
                        </a>
                        <a href='sala6.jpg'>
                            <img alt="Cristaleira e península" src="sala6.jpg" />
                        </a>
                        </LightGallery>
                </div>
            </div>
    );

};
