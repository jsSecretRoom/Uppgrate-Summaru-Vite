import './App.scss'

import { useState, useEffect } from 'react';

import ParticleAnimation from '../Animations/ParticleAnimation';

import DecoLine from '../DecoLine/DecoLine'
import DonutsProject from '../DonutsProject/DonutsProject'
import SocialLinks from '../SocialLinks/SocialLinks'
import StorysAutorization from '../StorysAutorization/StorysAutorization'
import CardLoader from '../CardComponent/CardLoader';
import NavComponent from '../NavComponent/NavComponent'
import CreateMyStory from '../CreateMyStory/CreateMyStory'
import SkillsComponnt from '../SkillsComponnt/SkillsComponnt';
import MyselfComponent from '../MyselfComponent/MyselfComponent';
import BildingSite from '../BildingSite/BildingSite';
import GoogleAuthPopup from '../GoogleAuthPopup/GoogleAuthPopup';
import MyMassages from '../MyMassages/MyMassages'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isParticleAnimationEnabled, setIsParticleAnimationEnabled] = useState(
    window.innerWidth >= 512
  );

  useEffect(() => {
    const handleResize = () => {
      setIsParticleAnimationEnabled(window.innerWidth >= 512);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isParticleAnimationEnabled && <ParticleAnimation />}
      <div className='layaut'>
        <NavComponent/>
        <main>
          <MyselfComponent/>
          <GoogleAuthPopup/>
          <DecoLine/>
          <SocialLinks/>
          <DecoLine/>
          <SkillsComponnt/>
          <DecoLine/>
          <CardLoader/>
          <DonutsProject/>
          <BildingSite/>
          <DecoLine/>

          {isAuthenticated ? (
            <CreateMyStory/>
          ) : (
            <StorysAutorization setIsAuthenticated={setIsAuthenticated} />
          )}
 
          <DecoLine/>
          <MyMassages/>
          <DecoLine/>
          <SocialLinks/>
          <DecoLine/>
          <footer id='phone'>
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
