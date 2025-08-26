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
                        <a href='banheiro1.PNG'>
                            <img alt="Banheiro" src="banheiro1.PNG" />
                        </a>
                        <a href='banheiro2.PNG'>
                            <img alt="Banheiro" src="banheiro2.PNG" />
                        </a>
                        <a href='comercial1.PNG'>
                            <img alt="Mesa de reunião" src="comercial1.PNG" />
                        </a>
                        <a href='comercial2.PNG'>
                            <img alt="Mesa escritório" src="comercial2.PNG" />
                        </a>
                        <a href='comercial3.PNG'>
                            <img alt="Paineis em entrada de prédio" src="comercial3.PNG" />
                        </a>
                        <a href='comercial4.PNG'>
                            <img alt="Loja com mesas expositoras" src="comercial4.PNG" />
                        </a>
                        <a href='comercial5.PNG'>
                            <img alt="Loja com eletrodomésticos" src="comercial5.PNG" />
                        </a>
                        <a href='cozinha1.PNG'>
                            <img alt="Cozinha" src="cozinha1.PNG" />
                        </a>
                        <a href='cozinha2.PNG'>
                            <img alt="Cozinha grande" src="cozinha2.PNG" />
                        </a>
                        <a href='cozinha3.PNG'>
                            <img alt="Cozinha com península" src="cozinha3.PNG" />
                        </a>
                        <a href='cozinha4.PNG'>
                            <img alt="Cozinha com lavanderia" src="cozinha4.PNG" />
                        </a>
                        <a href='cozinha5.PNG'>
                            <img alt="Cozinha com torre quente" src="cozinha5.PNG" />
                        </a>
                        <a href='quarto1.PNG'>
                            <img alt="Guarda-roupas" src="quarto1.PNG" />
                        </a>
                        <a href='quarto2.PNG'>
                            <img alt="Painel com led em quarto de criança" src="quarto2.PNG" />
                        </a>
                        <a href='quarto3.PNG'>
                            <img alt="Cama suspensa e painel" src="quarto3.PNG" />
                        </a>
                        <a href='quarto4.PNG'>
                            <img alt="Closet de corredor" src="quarto4.PNG" />
                        </a>
                        <a href='quarto5.PNG'>
                            <img alt="Closet" src="quarto5.PNG" />
                        </a>
                        <a href='quarto6.PNG'>
                            <img alt="Quarto com painel ripado e guarda-roupas" src="quarto6.PNG" />
                        </a>
                        <a href='sala1.PNG'>
                            <img alt="Painel em sala de estar" src="sala1.PNG" />
                        </a>
                        <a href='sala2.PNG'>
                            <img alt="Painel em sala de estar com cristaleira" src="sala2.PNG" />
                        </a>
                        <a href='sala3.PNG'>
                            <img alt="Painel em sala de estar" src="sala3.PNG" />
                        </a>
                        <a href='sala4.PNG'>
                            <img alt="Cristaleira" src="sala4.PNG" />
                        </a>
                        <a href='sala5.PNG'>
                            <img alt="Painel em sala de estar" src="sala5.PNG" />
                        </a>
                        <a href='sala6.PNG'>
                            <img alt="Cristaleira e península" src="sala6.PNG" />
                        </a>
                        </LightGallery>
                </div>
            </div>
    );

};
