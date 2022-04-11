import React from 'react';
import { ShowTours } from './ShowTours'

export const ToursIndex = ({ tours }) => {
  const renderTours = tours.map(item => {
    return (
      <ShowTours key={item.id} {...item} />
    )
  })

  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {renderTours}
      </div>
    </section>
  )
};
