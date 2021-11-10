import { useState } from 'react'

interface ToursProps { 
  id: number
  name: string
  info: string
  image: string
  price: number
  removeTour: (Tourid: number) => void
}

export const Tour = ({ id, image, info, price, name, removeTour }: ToursProps) => {
  const [ readMore, setReadMore ] = useState(!true)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>{readMore ? 'Show less' : 'Read more'}</button>        
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>Not Interested</button>
      </footer>
    </article>
  )
};
