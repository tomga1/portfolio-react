import React, { useEffect, useState } from 'react';
import './PedirDatosSobreMi.css';   
import { fetchSobreMi } from '../helpers/pedirdatos';
import Habilidades from './Habilidades';    

export default function PedirDatosSobreMi() {

    const [data, setData] = useState([]);
   
      useEffect(() => {
    fetchSobreMi()
      .then(setData)
      .catch(error => console.error('Error al obtener los datos:', error));
  }, []);

    console.log(data);
   return (
    <div className="perfil-container">
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.id}>
            <img className='foto-perfil ' src={`https://localhost:7222/${item.fotoPerfil}`} alt="Foto de perfil" />

            <h1>{item.nombre}</h1>
            <h2>{item.titulo}</h2>
            <br />
            <h3>Sobre mi</h3>

            <p className="descripcion">{item.descripcion}</p>

            <div className="info-contacto">
              <p><strong>Ubicación:</strong> {item.ubicacion}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Teléfono:</strong> {item.telefono}</p>
            </div>

            <div className="redes">
              <a href={item.linkedInUrl} target="_blank" rel="noreferrer">LinkedIn</a> |{' '}
              <a href={item.gitHubUrl} target="_blank" rel="noreferrer">GitHub</a>
            </div>


            <div className="info-estudios">
              <p><strong>Estudios actuales:</strong> {item.estudios}</p>
            </div>

            <blockquote className="frase">"{item.frase}"</blockquote>

            

            <p><strong>Trabajo:</strong> {item.trabajo}</p>
            <p><strong>Posición:</strong> {item.posicion}</p>
            <br />
            <Habilidades item={item} />

          </div>
        ))
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
}