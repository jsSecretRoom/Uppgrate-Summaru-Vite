import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import CardsProject from '../CardsProject/CardsProject';
import { db2 } from '../../../FirestoreCardSDK';

function CardLoader() {
  const [allCards, setAllCards] = useState([]);
  const [loadingError, setLoadingError] = useState(null);
  const batchSize = 8; // Размер пакета для загрузки

  useEffect(() => {
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

        // Получите первую партию карточек (первые 8 карточек)
        const initialBatch = flattenedCardsData.slice(0, batchSize);

        setAllCards(initialBatch);

        // Отправьте первую партию в компонент CardsProject
        // (другой код вашего компонента CardsProject может потребоваться)
        // <CardsProject allCards={initialBatch} />

        // Загрузите оставшиеся карточки и обновите состояние allCards по мере получения новых данных
        for (let i = batchSize; i < flattenedCardsData.length; i += batchSize) {
          const nextBatch = flattenedCardsData.slice(i, i + batchSize);

          // Обновите состояние allCards с новыми данными
          setAllCards((prevCards) => [...prevCards, ...nextBatch]);

          // Отправьте новую порцию данных в компонент CardsProject
          // (другой код вашего компонента CardsProject может потребоваться)
          // <CardsProject allCards={[...prevCards, ...nextBatch]} />
        }
      } catch (error) {
        console.error('Ошибка при получении данных о карточке:', error);
        setLoadingError(error);
      }
    };

    fetchData();
  }, []);

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