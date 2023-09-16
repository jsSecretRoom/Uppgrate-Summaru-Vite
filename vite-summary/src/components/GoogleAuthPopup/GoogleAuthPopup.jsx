import './GoogleAuthPopup.scss';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { app, db } from "../../../FirestoreSDK"; // Замените этот путь на путь к файлу с вашей конфигурацией Firebase

import React, { useState, useEffect } from 'react';

const GoogleAuthPopup = () => {
  const auth = getAuth(app); // Передайте объект app в функцию getAuth
  const [user, setUser] = useState(null); // Состояние для хранения информации об аутентифицированном пользователе
  const [messages, setMessages] = useState([]); // Состояние для хранения сообщений из коллекции

  // Функция для получения сообщений из коллекции "massages-for-my"
  const fetchMyMessages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'massages-for-my'));
      const myMessages = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.hasOwnProperty('for-my')) {
          myMessages.push(data);
        }
      });

      setMessages(myMessages);
    } catch (error) {
      console.error('Ошибка при получении сообщений:', error);
    }
  };

  // Эффект, который будет запускаться при изменении состояния пользователя
  useEffect(() => {
    // Если есть аутентифицированный пользователь, вызываем функцию для получения сообщений
    if (user) {
      fetchMyMessages();
    }
  }, [user]);

  // Функция для сохранения информации об аутентификации в локальное хранилище
  const saveAuthenticatedUserToLocalStorage = (user) => {
    localStorage.setItem('authenticatedUser', JSON.stringify(user));
  };

  // Функция для восстановления информации об аутентификации из локального хранилища
  const loadAuthenticatedUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem('authenticatedUser');
    if (storedUser) {
      const authenticatedUser = JSON.parse(storedUser);
      setUser(authenticatedUser);
    }
  };

  // При загрузке компонента, попробуйте восстановить информацию об аутентификации из локального хранилища
  useEffect(() => {
    loadAuthenticatedUserFromLocalStorage();
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // Аутентификация успешна, можно обрабатывать результат
      const authenticatedUser = result.user;
      console.log("Успешная аутентификация:", authenticatedUser);
      setUser(authenticatedUser); // Устанавливаем пользователя в состояние
      // Сохраняем информацию об аутентификации в локальное хранилище
      saveAuthenticatedUserToLocalStorage(authenticatedUser);
    } catch (error) {
      // Обработка ошибки аутентификации
      console.error("Ошибка аутентификации:", error);
    }
  };

  return (
    <section className='auth'>
      {user ? ( // Проверяем, аутентифицирован ли пользователь
        <div className='my-messages-section'>
          <h2>Feedback</h2>
          <div className='add-feedback'>
            <input type="text" name="Feedback" id="Feedback" placeholder='...'/>
            <button>leave feedback</button>
          </div>
          <ul>
            {messages.map((message, index) => (
              <li key={index}>{message['for-my']}</li>
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