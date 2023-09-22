import React, { useState, useEffect } from 'react';
import Animations from '../Animations/Animations';
import './StorysAutorization.scss';

// Импортируйте компонент CreateMyStory
import CreateMyStory from '../CreateMyStory/CreateMyStory';

function StorysAutorization() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка на соответствие ожидаемым данным
    if (email === 'g.ruslan.rus@gmail.com' && password === '1111') {
      setIsAuthenticated(true);
      setError(null);
    } else {
      setError('Wrong email or password!');
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    Animations('.storys-autorization');
  });

  return (
    <section className='storys-autorization'>
      <p>Event creator</p>
      {isAuthenticated ? (
        <CreateMyStory />
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            id='email'
            autoComplete='true'
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id='pasvord'
            type='current-password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Sign in</button>
        </form>
      )}
      {error && <p className='error-message'>{error}</p>}
    </section>
  );
}

export default StorysAutorization;