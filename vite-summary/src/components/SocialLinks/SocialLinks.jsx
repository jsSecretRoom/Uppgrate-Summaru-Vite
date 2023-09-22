import './SocialLinks.scss';

import Animations from '../Animations/Animations';
import { useEffect } from 'react';
import Github from '../../assets/img/Github.svg'
import Instagram from '../../assets/img/Instagram.svg'
import Telegram from '../../assets/img/Telegram.svg'
import LinkedIn from '../../assets/img/LinkedIn.svg'

function SocialLinks() {
  useEffect( () => {
    Animations('.foto-link');
  },);

  return ( 
      <section className='social-links'>
        <div className='links-conteiner'>
          <ul>
            <li><a href="https://t.me/ruslangubkin"><img className='foto-link' src={Telegram} alt="Telegram" /></a></li>
            <li><a href="https://www.instagram.com/ruslan_gubkin"><img className='foto-link' src={Instagram} alt="Instagram" /></a></li>
            <li><a href="https://www.linkedin.com/in/ruslan-%D0%B3%D1%83%D0%B1%D0%BA%D0%B8%D0%BD-a0754824a/"><img className='foto-link' src={LinkedIn} alt="LinkedIn" /></a></li>
            <li><a href="https://github.com/jsSecretRoom"><img className='foto-link' src={Github} alt="Github" /></a></li>
          </ul>
        </div>
      </section>
  );
}

export default SocialLinks;