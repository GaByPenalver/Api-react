import React from 'react';
import { useEffect, useState } from 'react';
import Buscador from './Buscador';
import 'bootstrap/dist/css/bootstrap.min.css';

const MiApi = ({ personajes, search }) => {
    let personajesAmostrar = [];
    if (search.trim() === "") {
        personajesAmostrar = personajes;
    } else {
        personajesAmostrar = personajes.filter((elemento) =>
            elemento.name.toLowerCase().includes(search.toLowerCase())
        );
    }
    personajesAmostrar.reverse();
    return (
        <div>
            {personajesAmostrar.length > 0 ? (
                <Buscador personajes={personajesAmostrar.slice(0, 6)} />
            ) : (
                <p>No se encontraron resultados</p>
            )}
        </div>
    );
}

export default MiApi;