import './CreateMyStory.scss';
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../FirestoreSDK';
import { nanoid } from 'nanoid';

function CreateMyStory() {
  const [message, setMessage] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Получите authorId из локального хранилища (если он там есть)
      const storedAuthorId = localStorage.getItem('authorId');
      const adminAuthorId = 'HfEvzwCbIAYi8qbm4LZPcaI0sBJ2';

      if (storedAuthorId && storedAuthorId !== adminAuthorId) {
        console.error('Only admin can create messages.'); // Вывод сообщения об ошибке
        return;
      }

      // Добавьте новый документ в коллекцию "mymassages" с атрибутами "massage", "authorId", и "messageId"
      const randomId = nanoid();
      const docRef = await addDoc(collection(db, 'mymassages'), {
        massage: message,
        authorId: adminAuthorId, // Установите администраторский authorId
        messageId: randomId
      });

      console.log('Document written with ID: ', docRef.id);

      // Очистите поле ввода после отправки сообщения
      setMessage('');
      onMessageSent();
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return ( 
    <div className='add-massage'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send message</button>
      </form>
    </div>
  );
}

export default CreateMyStory;