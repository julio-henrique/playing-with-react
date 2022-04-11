import React, { useState } from 'react';
import data from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export const Review = () => {
    const [index, setIndex] = useState(0)
    const { id, name, job, image, text } = data[index]
    
    function checkNumber(number) {
        if(number > data.length -1) return 0
        if(number < 0) return data.length -1
        return number
    }

    function nextPerson() {
        setIndex(indexParam => {
            let newIndex = indexParam + 1
            return checkNumber(newIndex)
        })
    }

    const prevPerson = () => {
        setIndex(indexParam => {
            let newIndex = indexParam - 1
            return checkNumber(newIndex)
        })
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * data.length)

        if(randomNumber === index) return randomNumber = index + 1

        setIndex(checkNumber(randomNumber))
        console.log(randomNumber)
    }
  
  return (
    <article className='review' key={id}>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>Surprise ME</button>
    </article>
  )
};
