import './MyMassages.scss';

import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../FirestoreSDK';

import tresh from '../../assets/img/Trash.svg'

async function fetchMessages() {
  const messagesCollection = collection(db, 'mymassages');

  try {
    const querySnapshot = await getDocs(messagesCollection);
    const messages = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.hasOwnProperty('massage')) {
        messages.push({ id: doc.id, message: data['massage'], createdBy: data['createdBy'] });
      }
    });

    return messages;
  } catch (error) {
    console.error('Ошибка при получении сообщений:', error);
    return [];
  }
}

function MyMassages() {
  const [messages, setMessages] = useState([]);
  

  useEffect(() => {
    fetchMessages().then((data) => {
      setMessages(data);
    });
  }, []);
  

  const adminAuthorId = 'HfEvzwCbIAYi8qbm4LZPcaI0sBJ2'; 

  const handleDeleteMessage = async (messageId, createdByUserId) => {
    try {
      // Проверьте, что текущий пользователь аутентифицирован
      const authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
      if (authenticatedUser) {
        // Проверьте, что текущий пользователь имеет право удалять сообщение
        if (authenticatedUser.uid === createdByUserId || authenticatedUser.uid === adminAuthorId) {
          // Только автор сообщения или админ могут его удалить
          await deleteDoc(doc(db, 'mymassages', messageId));
          // Обновите список сообщений после удаления
          setMessages((prevMessages) => prevMessages.filter((message) => message.id !== messageId));
        } else {
          console.error('У вас нет прав на удаление этого сообщения.');
        }
      } else {
        console.error('Пользователь не аутентифицирован.');
      }
    } catch (error) {
      console.error('Ошибка при удалении сообщения:', error);
    }
  };

  return ( 
    <section className='my-massages'>
      <ul className='massage-container'>
        {messages.map((message) => (
          <li className='massage' key={message.id}>
            {message.message}
            <button onClick={() => handleDeleteMessage(message.id, message.createdBy)}>
              <img src={tresh} alt="tresh" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MyMassages;