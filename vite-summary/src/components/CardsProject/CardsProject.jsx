import './CardsProject.scss';
import CardComponent from '../CardComponent/CardComponent';
import React, { useEffect, useRef, useState } from 'react';

function CardsProject({ allCards }) {
  const [randomCards, setRandomCards] = useState([]);
  const projectRefs = useRef([]);
  const projectCount = 6; // Количество блоков CardComponent

  useEffect(() => {
    // Создаем рефы для проектов
    projectRefs.current = Array.from({ length: projectCount }, (_, index) =>
      projectRefs.current[index] || React.createRef()
    );

    // Вызываем функцию для установки случайных карточек
    setRandomCards(getRandomCards(projectCount));
  }, [projectCount, allCards]);

  // Функция для получения случайных карточек из allCards
  const getRandomCards = (count) => {
    if (allCards && allCards.length > 0) {
      const randomIndexes = [];
      while (randomIndexes.length < count) {
        const randomIndex = Math.floor(Math.random() * allCards.length);
        if (!randomIndexes.includes(randomIndex)) {
          randomIndexes.push(randomIndex);
        }
      }
      return randomIndexes.map((index) => allCards[index]);
    } else {
      return Array(count).fill(null); // или что-то другое, что обозначает отсутствие данных
    }
  };

  return (
    <section className='project1'>
      <div className='card-conteiner'>
        <div className='block-frame'>
          <p>Product cart creator!</p>
          <a href='https://cards-creator-vite.vercel.app/'> <button>Visit page!</button></a>
        </div>
        <div className="rotating-card">
          <div className='top-line'>
            <div className="rectangle">
              <CardComponent randomCard={randomCards[0]} />
            </div>
          </div>
          <div className='bottom-line' >
            <div className="rectangle">
              <CardComponent randomCard={randomCards[1]} />
            </div>
          </div>
          <div className='left-line' >
            <div className="rectangle">
              <CardComponent randomCard={randomCards[2]} />
            </div>
            <div className="rectangle">
              <CardComponent randomCard={randomCards[3]} />
            </div>
          </div>
          <div className='right-line'>
            <div className="rectangle">
              <CardComponent randomCard={randomCards[4]} />
            </div>
            <div className="rectangle">
              <CardComponent randomCard={randomCards[5]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardsProject;