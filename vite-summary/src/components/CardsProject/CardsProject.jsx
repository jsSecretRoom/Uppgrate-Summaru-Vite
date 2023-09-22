import './CardsProject.scss';

import CardComponent from '../CardComponent/CardComponent';
import { useEffect, useState, useRef } from 'react';

function CardsProject({ allCards }) {
  const [randomCard1, setRandomCard1] = useState(null);
  const [randomCard2, setRandomCard2] = useState(null);
  const [randomCard3, setRandomCard3] = useState(null);
  const [randomCard4, setRandomCard4] = useState(null);
  const [randomCard5, setRandomCard5] = useState(null);
  const [randomCard6, setRandomCard6] = useState(null);

  const project1Ref = useRef(null);
  const cardRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const project1Rect = project1Ref.current.getBoundingClientRect();

      cardRefs.forEach((cardRef, index) => {
        const cardRect = cardRef.current.getBoundingClientRect();
        // Проверяем, если верхняя точка карточки опустилась ниже нижней точки project1
        const isBelow = cardRect.top > project1Rect.bottom;

        if (isBelow) {
          const randomIndex = Math.floor(Math.random() * allCards.length);
          const newCard = allCards[randomIndex];

          switch (index) {
            case 0:
              setRandomCard1(newCard);
              break;
            case 1:
              setRandomCard2(newCard);
              break;
            case 2:
              setRandomCard3(newCard);
              break;
            case 3:
              setRandomCard4(newCard);
              break;
            case 4:
              setRandomCard5(newCard);
              break;
            case 5:
              setRandomCard6(newCard);
              break;
            default:
              break;
          }
        }
      });
    }, 1000); // Периодическая проверка каждую секунду

    return () => {
      clearInterval(interval);
    };
  }, [allCards]);

  useEffect(() => {
    // Обновите все карточки при монтировании компонента
    const newCards = Array.from({ length: 6 }, () => {
      const randomIndex = Math.floor(Math.random() * allCards.length);
      return allCards[randomIndex];
    });

    setRandomCard1(newCards[0]);
    setRandomCard2(newCards[1]);
    setRandomCard3(newCards[2]);
    setRandomCard4(newCards[3]);
    setRandomCard5(newCards[4]);
    setRandomCard6(newCards[5]);
  }, [allCards]);

  return (
    <section className='project1' ref={project1Ref} id='project1'>
      <div className='card-conteiner'>
        <div className='block-frame'>
          <p>Product cart creator!</p>
          
          <a href='https://cards-creator-vite.vercel.app/'>
            <p>Create your own card!</p>
            <button>Visit page!</button>
          </a>
        </div>
        <div className='rotating-card'>
          
          <div className='top-line'>
            <div className='rectangle' ref={cardRefs[0]}>
              <CardComponent randomCard={randomCard1}/>
            </div>
          </div>
          <div className='bottom-line'>
            <div className='rectangle' ref={cardRefs[1]}>
              <CardComponent randomCard={randomCard2}/>
            </div>
          </div>
          <div className='left-line'>
            <div className='rectangle' ref={cardRefs[2]}>
              <CardComponent randomCard={randomCard3}/>
            </div>
            <div className='rectangle' ref={cardRefs[3]}>
              <CardComponent randomCard={randomCard4}/>
            </div>
          </div>
          <div className='right-line'>
            <div className='rectangle' ref={cardRefs[4]}>
              <CardComponent randomCard={randomCard5}/>
            </div>
            <div className='rectangle' ref={cardRefs[5]}>
              <CardComponent randomCard={randomCard6}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardsProject;