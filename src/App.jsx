import { createContext, useContext, useState } from 'react';
import data from './data';
import Reviews from './components/Reviews';

const AppContext = createContext();
export const useAppContext = () => useContext(AppContext);

const App = () => {
  // const [next, setNext] = useState(0);
  // const [prev, setPrev] = useState(0);
  // const [count, setCount] = useState(1);
  // const [isNext, setIsNext] = useState(false);
  // const [isRandom, setIsRandom] = useState(false);
  // const [randomNumber, setRandomNumber] = useState(0);
  const [reviews, setReviews] = useState(data);
  const [index, setIndex] = useState(0);

  const checkNumber = (index) => {
    if (index > reviews.length - 1) {
      return 0;
    }

    if (index < 0) {
      return (reviews.length - 1)
    }

    return index;
  }

  const handleNextReview = () => {
    setIndex((prev) => {
      const newIndex = prev + 1

      return checkNumber(newIndex);
    })
  }

  const handlePreviousReview = () => {
    setIndex((prev) => {
      const newIndex = prev - 1

      return checkNumber(newIndex);
    })
  }

  const handleRandomReview = () => {
    const randomReview = Math.floor(Math.random() * 4);
    if (randomReview === index) {
      return setIndex(index + 1)
    }

    setIndex(randomReview)
  }

  const review = reviews[index]

  // const handleNext = () => {
  //   setIsRandom(false)
  //   if (count === 0) {
  //     setCount(1)
  //   }
  //   setCount(count => {
  //     return count + 1;
  //   })
  //   if (count > reviews.length - 1) {
  //     setCount(5)
  //     return;
  //   }
  //   setNext(prev + 1);
  //   setPrev(prev => {
  //     return prev + 1;
  //   }); 
  //   setIsNext(true);
  // }

  // const handlePrev = () => {
  //   setIsRandom(false)
  //   setCount(count => {
  //     return count - 2;
  //   })

  //   if (count <= 0) {
  //     setCount(0)
  //     return;
  //   }
  //   setPrev(next - 1);
  //   setNext(prev => prev - 1)
  // }

  // const review = isRandom ? reviews[randomNumber] : reviews[isNext ? prev : next];

  return (
    <AppContext.Provider value={{ reviews, review, handleNextReview, handlePreviousReview, handleRandomReview }}>
      <main>
        <Reviews />
      </main>
    </AppContext.Provider>
  );
};
export default App;
