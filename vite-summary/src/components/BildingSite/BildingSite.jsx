import React, { useEffect, useMemo } from 'react';
import './BildingSite.scss';

import topbuilding from '../../assets/img/topbuilding.svg';
import bottombuilding from '../../assets/img/bottombuilding.svg';
import leftbuilding from '../../assets/img/leftbilding.svg';
import rightbuilding from '../../assets/img/rightBuilding.svg';

import Animations from '../Animations/Animations';

function BildingSite() {
  useEffect(() => {
    Animations('.leftbuilding');
    Animations('.rightbuilding');
    Animations('.topbuilding');
    Animations('.bottombuilding');
  });

  // Создаем кэш изображений с помощью useMemo
  const imageCache = useMemo(() => {
    const cache = new Map();
    cache.set('topbuilding', topbuilding);
    cache.set('bottombuilding', bottombuilding);
    cache.set('leftbuilding', leftbuilding);
    cache.set('rightbuilding', rightbuilding);
    return cache;
  }, []);

  return (
    <section className='bilding-site' id='project3'>
      <div className='conteiner'>
        <div className='leftbuilding'><img src={imageCache.get('leftbuilding')} alt="leftbuilding" /></div>
        <div className='rightbuilding'><img src={imageCache.get('rightbuilding')} alt="rightbuilding" /></div>
        <div className='topbuilding'><img src={imageCache.get('topbuilding')} alt="topbuilding" /></div>
        <div className='bottombuilding'><img src={imageCache.get('bottombuilding')} alt="bottombuilding" /></div>
        <div className='shov-site'>
          <p>BildingSite</p>
          <button>Visit page!</button>
        </div>
      </div>
    </section>
  );
}

export default BildingSite;