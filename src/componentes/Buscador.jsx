import React from 'react';

const Buscador = ({ personajes }) => {
    if (!personajes) {
        return null;
    }



    return (
        <div className='container'>
        <div className='row justify-content-center align-items-center'>
            {personajes.map((personaje, index) => (
                <div className='col' key={index}>
                    <div className='card' style={{ height: '380px', width: '350px',transition: 'all 0.3s' }}>
                        <div className="card-body d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#f7929f' }}>
                            <img src={personaje.imageUrl} className="card-img-top mb-3" alt={personaje.name} style={{ height: '195px', width: '195px', objectFit: 'cover' }} />
                            <h5 className="card-title text-center">{personaje.name}</h5>
                            <p className="card-text text-center"><strong>Clase de peso:</strong> {personaje.weightClass}</p>
                            <p className="card-text text-center"><strong>Victorias por KO:</strong> {personaje.winsByKO}</p>
                            <p className="card-text text-center"><strong>Derrotas:</strong> {personaje.losses}</p>
                            <a href={personaje.more_info} className="btn btn-danger">Más información</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Buscador;








