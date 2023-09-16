import './App.scss'

import { useState } from 'react';

import DecoLine from '../DecoLine/DecoLine'
import DonutsProject from '../DonutsProject/DonutsProject'
import SocialLinks from '../SocialLinks/SocialLinks'
import StorysAutorization from '../StorysAutorization/StorysAutorization'
import CardsProject from '../CardsProject/CardsProject'
import NavComponent from '../NavComponent/NavComponent'
import CreateMyStory from '../CreateMyStory/CreateMyStory'

import GoogleAuthPopup from '../GoogleAuthPopup/GoogleAuthPopup';

import MyMassages from '../MyMassages/MyMassages'

import MyFoto from '../../assets/my-foto.png'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <div className='decoraton-head'></div>
      <div className='layaut'>
        <NavComponent/>
        <main>
          
          <section className='myself'>
            
            <div className='greeting'><h1>Nice to meet you!</h1></div>
            <div className='status'><p>find-work!</p></div>
            <div className='stak-info'>
              <ul>
                <li>Stack</li>
                <li>React + Vite</li>
                <li>JS & Node.js</li>
                <li>Firebase</li>
              </ul>
            </div>
            <div className='greeting-text'>
              <p>I'm a front end developer. On this page you will see my projects and learn about my technology stack.</p>
            </div>
            <div className='avatar'>
              <img src={MyFoto} alt="MyFoto" />
            </div>
            <div className='about-my'>
              <div className='my-comteiner'>
                <h2>My name is Ruslan!</h2>
                <p>I am 23 years old, Mykolaiv Ukaina! I do most of the development in the second half of the year and get results in your field! At this stage, you can find your job, recognition, etc. d. projects with the possibility of their assessment! My metabolic rate and speed! I use new standards for writing code that validates new ones methods where necessary.</p>
              </div>
            </div>
            <div className='next-info'>
              <p>next-info</p>
              <ul>
                <li>wewewewew</li>
                <li>wewewewew</li>
                <li>wewewewew</li>
                <li>wewewewew</li>
                <li>wewewewew</li>
              </ul>
            </div>
          </section>
          <GoogleAuthPopup/>
          <DecoLine/>
          <SocialLinks/>
          <DecoLine/>
          <section className='skills'>
            <div className='my-skills'>
              <h3>Skills</h3>
              <div className='categoy-skill'>
                <div className='soft'>
                  <p>Soft</p>
                  <ul>
                    <li>Creative</li>
                    <li>Not conflicting</li>
                    <li>Stress resistant</li>
                    <li>Punctual</li>
                    <li>I know how to convince</li>
                    <li>I know how to evaluate people</li>
                  </ul>
                </div>
                <div className='hard'>
                  <p>Hard</p>
                  <ul>
                    <li>Creative</li>
                    <li>Not conflicting</li>
                    <li>Stress resistant</li>
                    <li>Punctual</li>
                    <li>I know how to convince</li>
                    <li>I know how to evaluate people</li>
                  </ul>
                </div>
                <div className='others'>
                  <p>Others</p>
                  <ul>
                    <li>Creative</li>
                    <li>Not conflicting</li>
                    <li>Stress resistant</li>
                    <li>Punctual</li>
                    <li>I know how to convince</li>
                    <li>I know how to evaluate people</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <DecoLine/>
          <CardsProject/>
          <DonutsProject/>
          <section className='bilding-site'>
            
          </section>
          <DecoLine/>

          {isAuthenticated ? (
            <CreateMyStory />
          ) : (
            <StorysAutorization setIsAuthenticated={setIsAuthenticated} />
          )}

          <DecoLine/>
          <MyMassages/>
          <DecoLine/>
          <SocialLinks/>
          <DecoLine/>
          <footer>
            <div className='futer-conteiner'>
              <p>Phone: +380677076893</p>
            </div>
          </footer>
        </main>
      </div>
    </>
  )
}

export default App
