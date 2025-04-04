import React, { useEffect, useState } from 'react';
import "./PropagandaRight.css";

const PropagandaRight = () => {

    const [content, setContent] = useState({});
    
        useEffect(() => {
            fetch("/contentExample.json")
                .then((response) => response.json())
                .then((data) => setContent(data))
                .catch((error) => console.error("Erro ao carregar JSON:", error));
        }, []);

    return (
        <section className="propaganda-container-right">
             <div className="text-container-right">
                
                <div className="about-text">
                    <div className="box-about">
                        <img src="brown-line.jpg" alt="brown-line" className="brown-line-right"/>
                        <h2 className="title">Sobre</h2>
                    </div>

                    <p>{content.about_1}</p>
                    <p>{content.about_2}</p>
                </div>
            </div>
            
            <div className="img-container-right">
                <img src="propaganda2.jpg" alt="first-image-right" className="first-image-right" />
            </div>
        </section>
    );
};

export default PropagandaRight;