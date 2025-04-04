import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
    const [content, setContent] = useState({});

    useEffect(() => {
        fetch("contentExample.json")
            .then((response) => response.json())
            .then((data) => setContent(data))
            .catch((error) => console.error("Erro ao carregar JSON:", error));
    }, []);
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(content.emailJs_ServiceID, content.emailJs_TemplateID, form.current, {
            publicKey: content.emailJs_API,
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

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
            </div>
            
            <div className="maps">
            <iframe
                title="Google Maps"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={content.map}></iframe>
            </div>
        </div>

        <div className="container-with-everything">
            <div className="container-with-forms">
            <img src="brown-line.jpg" alt="brown-line" className="brown-line-forms"/>
                <form ref={form} onSubmit={sendEmail}>
                    <p>Mande sua dúvida que entraremos em contato!</p>
                    <label>Nome</label>
                    <input type="text" name="name" />
                    <label>Email</label>
                    <input type="email" name="email" />
                    <label>Celular</label>
                    <input type="tel" name="cellphone" />
                    <label>Assunto</label>
                    <input type="text" name="subject" />
                    <label>Messagem</label>
                    <textarea name="message" />
                    <div className="button-container">
                        <button type="submit" value="Send">Enviar</button>
                    </div>
        
                </form>
            </div>

           
        </div>
    </section>


    
  );
};

export default Contact;