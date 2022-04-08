import React from 'react';
import '../hojas-de-estilo/testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img src={require(`../images/testimonio-${props.imagen}.png`)} className='imagen-testimonio' alt='Foto' />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> in {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} at <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div> 
  );
}

export default Testimonio;