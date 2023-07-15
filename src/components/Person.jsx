import React from 'react';
import { useAppContext } from '../App';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Person = () => {
    const { review, handleNextReview, handlePreviousReview, handleRandomReview } = useAppContext();
    const { image, name, job, text } = review;
    

  return (
      <article>
          <div className='img-container'>
              <img className='person-img' src={image} alt={name} />
              <div className='quote-icon'>
                  <FaQuoteRight />
              </div>  
          </div>
          <div>
              <h2 className='author'>{name}</h2>
              <p className='job'>{job}</p>
              <p className='info'>{text}</p>
          </div>
          <div className='btn-container'>
              <FaChevronLeft className='prev-btn'  onClick={handlePreviousReview} />
              <FaChevronRight className='next-btn' onClick={handleNextReview} />
          </div>
          <div className='btn-container'>
              <button onClick={handleRandomReview} type="button" className='btn'>Surprise me</button>
          </div>
    </article>
  )
}

export default Person