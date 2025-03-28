import React, { useEffect, useState } from 'react';
import "./PropagandaLeft.css";


const PropagandaLeft = () => {
    const [content, setContent] = useState({});
    
        useEffect(() => {
            fetch("/content.json")
                .then((response) => response.json())
                .then((data) => setContent(data))
                .catch((error) => console.error("Erro ao carregar JSON:", error));
        }, []);

    return (
        <section className="propaganda-container-left">

            <div className="img-container-left">
                <img src="propaganda1.jpg" alt="first-image-left" className="first-image-left" />
            </div>

            <div className="text-container-left">

                <div className="box-container-1">
                    <img src="brown-line.jpg" alt="brown-line" className="brown-line"/>
                    <img src="high-quality.svg" alt="icon-quality" className="quality-icon"/>
                    <p>{content["first-text"]}</p>
                </div>

                <div className="box-container-2">
                    <img src="brown-line.jpg" alt="brown-line" className="brown-line"/>
                    <img src="ideia.svg" alt="icon-idea" className="idea-icon"/>
                    <p>{content["second-text"]}</p>
                </div>

            </div>
        </section>
    );
};

export default PropagandaLeft;