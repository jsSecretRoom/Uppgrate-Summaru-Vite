import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import CardsProject from '../CardsProject/CardsProject';
import { db2 } from '../../../FirestoreCardSDK';

function CardLoader() {
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    // Здесь вы можете выполнить запрос к серверу Firebase для получения данных о карточке
    // Аналогично вашему существующему коду, но только один раз при монтировании компонента
    const fetchData = async () => {
      try {
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

        // Используйте Promise.all для асинхронного получения данных из всех коллекций
        const fetchPromises = collectionNames.map(async (cardName) => {
          const collectionRef = collection(db2, cardName);
          const querySnapshot = await getDocs(collectionRef);
          const cardsData = [];

          querySnapshot.forEach((doc) => {
            const cardData = doc.data();
            cardsData.push(cardData);
          });

          // Возвращаем массив данных из коллекции
          return cardsData;
        });

        // Дождитесь завершения всех запросов и объедините данные из разных коллекций
        const allCardsData = await Promise.all(fetchPromises);
        const flattenedCardsData = allCardsData.flat();
        setAllCards(flattenedCardsData);
        
      } catch (error) {
        console.error('Ошибка при получении данных о карточке:', error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <>
      <CardsProject allCards={allCards} />
    </>
  );
}

export default CardLoader;