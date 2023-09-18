import './GoogleAuthPopup.scss';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection, getDocs, getDoc,  deleteDoc, doc } from "firebase/firestore";
import { app, db } from "../../../FirestoreSDK";
import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';

import TrashIcon from '../../assets/img/Trash.svg'

const GoogleAuthPopup = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const addMessage = async (messageText) => {
    try {
      const randomId = nanoid();
      const messageData = {
        "for-my": messageText,
        "authorId": user.uid,
        "messageId": randomId
      };

      const messageRef = await addDoc(collection(db, "messages-for-my"), messageData);
      const docId = messageRef.id;
      console.log("Сообщение успешно добавлено с docId:", docId);

      fetchMyMessages();
    } catch (error) {
      console.error("Ошибка при добавлении сообщения:", error);
    }
  };

  const fetchMyMessages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'messages-for-my'));
      const myMessages = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.hasOwnProperty('for-my')) {
          myMessages.push({ ...data, messageId: doc.id });
        }
      });

      setMessages(myMessages);
    } catch (error) {
      console.error('Ошибка при получении сообщений:', error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchMyMessages();
    }
  }, [user]);

  const saveAuthenticatedUserToLocalStorage = (user) => {
    localStorage.setItem('authenticatedUser', JSON.stringify(user));
  };

  const loadAuthenticatedUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem('authenticatedUser');
    if (storedUser) {
      const authenticatedUser = JSON.parse(storedUser);
      setUser(authenticatedUser);
    }
  };

  useEffect(() => {
    loadAuthenticatedUserFromLocalStorage();
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const authenticatedUser = result.user;
      console.log("Успешная аутентификация:", authenticatedUser);
      setUser(authenticatedUser);
      saveAuthenticatedUserToLocalStorage(authenticatedUser);
    } catch (error) {
      console.error("Ошибка аутентификации:", error);
    }
  };

  const deleteMessage = async (messageId, authorId) => {
    try {
      const messageDocRef = doc(db, 'messages-for-my', messageId);
      const messageDoc = await getDoc(messageDocRef);

      if (messageDoc.exists()) {
        const messageData = messageDoc.data();
        if (messageData.authorId === authorId) {
          await deleteDoc(messageDocRef);
          fetchMyMessages();
        } else {
          console.error('У вас нет прав на удаление этого сообщения.');
        }
      } else {
        console.error('Сообщение не существует.');
      }
    } catch (error) {
      console.error('Ошибка при удалении сообщения:', error);
    }
  };

  return (
    <section className='auth'>
      {user ? (
        <div className='my-messages-section'>
          <h2>Feedback</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            addMessage(document.getElementById("Feedback").value);
          }}>
            <div className='add-feedback'>
              <input type="text" name="Feedback" id="Feedback" placeholder='...' />
              <button type="submit">leave feedback</button>
            </div>
          </form>
          <ul>
            {messages.map((message) => (
              <li key={message.messageId}>
                {message['for-my']}
                {message.authorId === user.uid && (
                  <button onClick={() => deleteMessage(message.messageId, message.authorId)}>
                    <img src={TrashIcon} alt="TrashIcon" />
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="auth-popup">
          <p>Log in to view reviews or leave your own:</p>
          <button onClick={signInWithGoogle}>Google authentication</button>
        </div>
      )}
    </section>
  );
};

export default GoogleAuthPopup;