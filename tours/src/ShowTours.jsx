import React from 'react';

// Destructure the api
export const ShowTours = ({ id, image, name, info, price }) => {
  // o read more tem que ser um estado, inicializado como false
  return (
    <article className='single-tour'>
      <img />
      <footer>
        <div className='tour-info'>
          <h4>name</h4>
          <h4 className='tour-price'>price</h4>
        </div>
        <p>
          readMore
          {/* aqui acima você faz um ternário para mostrar só uma parte do texto.
          dica veja o array method substring 
          
          */}
          <button>show more</button>    
          {/* O texto do botão é ternário também. 
          Ele define o estado do readmore como false ou true */}
        </p>
        <button className='delete-btn'>Not Interested</button>
        {/* E por último, este é o botão que remove os tours de forma individual */}
      </footer>
    </article>
  )
};
