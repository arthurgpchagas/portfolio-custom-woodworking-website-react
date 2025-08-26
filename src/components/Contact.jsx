import React, { useEffect, useState } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
    const [content, setContent] = useState({});

    useEffect(() => {
        fetch("contentExample.json")
            .then((response) => response.json())
            .then((data) => setContent(data))
            .catch((error) => console.error("Erro ao carregar JSON:", error));
    }, []);

  return (
    <section className="contact-information">
        <div className="container-with-map-and-info">
            <div className="container-only-texts">
                
                <div className="contact-title">
                               <img src="brown-line.jpg" alt="brown-line" className="brown-line-contact"/>
                                <h2>Contatos</h2>
                </div>

                <p><strong>{content.name}</strong></p>
                <p><strong>Endereço:</strong> {content.address}</p>
                <p><strong>E-mail:</strong> {content.email}</p>
                <p><strong>Celular:</strong> {content.cellphone}</p>
                <p>{content.social_media_text}</p>
                        
                <div className="box-social-media">
                    <a
                        href={`https://www.instagram.com/${content.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        title="Instagram"
                    >
                        <FaInstagram size={30} color="#E4405F" />
                    </a>

                    <a
                        href={`https://www.facebook.com/${content.facebook}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        title="Facebook"
                    >
                        <FaFacebook size={30} color="#1877F2" />
                    </a>

                    <a
                        href={`https://wa.me/${content.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        title="WhatsApp"
                    >
                        <FaWhatsapp size={30} color="#25D366" />
                    </a>
                    </div>
            </div>
            
            <div className="maps">
            <iframe
                title="Google Maps"
                width="100%"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={content.map}></iframe>
            </div>
        </div>
    </section>


    
  );
};

export default Contact;