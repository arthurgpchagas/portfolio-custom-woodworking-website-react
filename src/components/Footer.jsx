import React, { useEffect, useState } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import './Footer.css';


const Footer = () => {
    const [content, setContent] = useState({});

    useEffect(() => {
        fetch("/content.json")
            .then((response) => response.json())
            .then((data) => setContent(data))
            .catch((error) => console.error("Erro ao carregar JSON:", error));
    }, []);

    return (
        <section className="footer-container">
            <div className="footer-content-container">
                <div className="left-side-info">
                    <p>{content.info}</p>
                    <p>{content.cellphone}</p>
                    <p>{content.email}</p>
                </div>
                    
                <div className="footer-centered-text-and-image">
                    <div className="center-image">
                        <img src="logo.jpeg" alt="Logo" className="logo-footer" />
                    </div>
                    
                    <div className="footer-informations-container-text">
                        <span>{content.information_for_footer}</span> &nbsp;-&nbsp;
                        <span>{content.name}</span> &nbsp;-&nbsp;
                        <span>{content.cnpj}</span> &nbsp;-&nbsp;
                        <span>{content.creation}</span>
                    </div>
                </div>

                    
                <div className="right-side-info">
                    <p>{content.social_media_text}</p>
                        
                    <div className="box-social-media">
                        <a href={`https://www.instagram.com/${content.instagram}`} target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} color="#E4405F" />
                        </a>
                            
                        <a href={`https://www.facebook.com/${content.facebook}`} target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} color="#1877F2" />
                        </a>
                            <a href={`https://wa.me/${content.whatsapp}`} target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp  size={30} color="#25D366"/>
                        </a>
                    </div>

                </div>
            </div>
        </section>

    );
}
''
export default  Footer;