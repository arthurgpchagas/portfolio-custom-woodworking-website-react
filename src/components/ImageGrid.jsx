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
                        <a href='gallery1.PNG'>
                            <img alt="Sala de jantar" src="gallery1 - thumb.PNG" />
                        </a>
                        <a href='gallery2.PNG'>
                            <img alt="Quarto de criança" src="gallery2 - thumb.PNG" />
                        </a>
                        <a href='gallery3.PNG'>
                            <img alt="Quarto de criança" src="gallery3 - thumb.PNG" />
                        </a>
                        <a href='gallery4.PNG'>
                            <img alt="Cozinha" src="gallery4 - thumb.PNG" />
                        </a>
                        <a href='gallery5.PNG'>
                            <img alt="Gabinete embaixo de pia em ilha na cozinha" src="gallery5 - thumb.PNG" />
                        </a>
                        <a href='gallery6.PNG'>
                            <img alt="Cozinha" src="gallery6 - thumb.PNG" />
                        </a>
                        <a href='gallery7.PNG'>
                            <img alt="Closet" src="gallery7 - thumb.PNG" />
                        </a>
                        <a href='gallery8.PNG'>
                            <img alt="Painel em sala de estar" src="gallery8 - thumb.PNG" />
                        </a>
                        </LightGallery>
                </div>
            </div>
    );

};
