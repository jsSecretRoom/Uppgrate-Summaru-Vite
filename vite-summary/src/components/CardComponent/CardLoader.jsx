import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import CardsProject from '../CardsProject/CardsProject';
import { db2 } from '../../../FirestoreCardSDK';

function CardLoader() {
  const [allCards, setAllCards] = useState([]);
  const [loadingError, setLoadingError] = useState(null);

  useEffect(() => {
    // Функция для получения данных из localStorage
    const getCardsFromStorage = () => {
      const storedCards = localStorage.getItem('allCards');
      return storedCards ? JSON.parse(storedCards) : [];
    };

    const fetchData = async () => {
      try {
        // Получаем данные из localStorage при монтировании
        const storedCards = getCardsFromStorage();
        setAllCards(storedCards);

        const allCollectionsRef = collection(db2, 'AllCollections');
        const querySnapshot = await getDocs(allCollectionsRef);

        if (querySnapshot.empty) {
          console.error('В коллекции "AllCollections" нет документов');
          return;
        }

        const collectionNames = [];

        querySnapshot.forEach((doc) => {
          const collectionName = doc.data().collectionName;
          collectionNames.push(collectionName);
        });

        const fetchPromises = collectionNames.map(async (cardName) => {
          const collectionRef = collection(db2, cardName);
          const querySnapshot = await getDocs(collectionRef);
          const cardsData = [];

          querySnapshot.forEach((doc) => {
            const cardData = doc.data();
            cardsData.push(cardData);
          });

          return cardsData;
        });

        const allCardsData = await Promise.all(fetchPromises);
        const flattenedCardsData = allCardsData.flat();

        // Выбираем рандомные 10 карточек для отображения
        const randomCards = getRandomCards(flattenedCardsData, 10);

        // Обновляем данные в localStorage
        localStorage.setItem('allCards', JSON.stringify(flattenedCardsData));

        setAllCards(randomCards);
      } catch (error) {
        console.error('Ошибка при получении данных о карточке:', error);
        setLoadingError(error);
        
        setTimeout(() => {
          fetchData();
        }, 10000); // Повторный запрос через 10 секунд в случае ошибки
      }
    };

    fetchData();
  }, []);

  const getRandomCards = (cardsArray, count) => {
    const shuffled = cardsArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  if (loadingError) {
    return <div>Ошибка при загрузке карточек. Попробуйте еще раз позже.</div>;
  }

  if (allCards.length === 0) {
    return <div>Загрузка карточек...</div>;
  }
  
  return (
    <>
      <CardsProject allCards={allCards} />
    </>
  );
}

export default CardLoader;