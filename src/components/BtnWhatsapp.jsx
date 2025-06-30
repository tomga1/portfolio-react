import React from 'react'
import {FaWhatsapp} from 'react-icons/fa';
import './BtnWhatsapp.css'; // Asegúrate de tener este archivo para los estilos

export default function BtnWhatsapp() {
    const phoneNumber = '+541150254381'; // Reemplaza con tu número de WhatsApp
    const message = 'Hola Tomás, vengo de tu portfolio y me gustaría contactarte ';
    const whatsappUrl =  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
    <FaWhatsapp />
    </a>
  );
}