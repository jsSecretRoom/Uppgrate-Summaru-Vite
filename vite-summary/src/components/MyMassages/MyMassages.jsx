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
        messages.push({ id: doc.id, message: data['massage'] });
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

  const handleDeleteMessage = async (messageId) => {
    try {
      // Удалите документ из коллекции "mymassages" по его ID
      await deleteDoc(doc(db, 'mymassages', messageId));
      // Обновите список сообщений после удаления
      setMessages((prevMessages) => prevMessages.filter((message) => message.id !== messageId));
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
            <button onClick={() => handleDeleteMessage(message.id)}> <img src={tresh} alt="tresh" /> </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MyMassages;