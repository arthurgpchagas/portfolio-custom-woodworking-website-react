import React, { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
    const [content, setContent] = useState({});

    useEffect(() => {
        fetch("/content.json")
            .then((response) => response.json())
            .then((data) => setContent(data))
            .catch((error) => console.error("Erro ao carregar JSON:", error));
    }, []);
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('service_8guzvbk', 'template_20dipsx', form.current, {
            publicKey: '9FqzVpSZ0oxIniV6H',
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6934902341545!2d-46.5003423!3d-23.5435242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce674bc12c3e7b%3A0x6365ffa023fe6254!2sRua%20Dr.%20Pereira%20de%20Resende%2C%20112%20-%20Vila%20Nhocun%C3%A9%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003558-020!5e0!3m2!1spt-BR!2sbr!4v1743029997902!5m2!1spt-BR!2sbr"></iframe>
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