import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import './CallUs.css';

const CallUs = () => {
    const [content, setContent] = useState({});
    
        useEffect(() => {
            fetch("/contentExample.json")
                .then((response) => response.json())
                .then((data) => setContent(data))
                .catch((error) => console.error("Erro ao carregar JSON:", error));
        }, []);
        
    return (
        <a
        href ={`https://wa.me/${content.whatsapp}`} 
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        >
        <FaWhatsapp size={40} />
        </a>

    );
};

export default CallUs