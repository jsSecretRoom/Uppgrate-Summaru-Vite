import './App.scss'

import { useState } from 'react';

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

  return (
    <>
      <div className='decoraton-head'></div>
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
