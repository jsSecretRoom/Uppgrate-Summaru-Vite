import './CreateMyStory.scss';
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../FirestoreSDK';

function CreateMyStory() {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Добавьте новый документ в коллекцию "mymassages" с атрибутом "message"
      const docRef = await addDoc(collection(db, 'mymassages'), {
        massage: message
      });

      console.log('Document written with ID: ', docRef.id);

      // Очистите поле ввода после отправки сообщения
      setMessage('');
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