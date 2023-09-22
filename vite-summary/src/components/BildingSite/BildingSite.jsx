import './BildingSite.scss';

import topbuilding from '../../assets/img/topbuilding.svg';
import bottombuilding from '../../assets/img/bottombuilding.svg';
import leftbuilding from '../../assets/img/leftbilding.svg';
import rightbuilding from '../../assets/img/rightBuilding.svg';

import { useEffect } from 'react';

import Animations from '../Animations/Animations';

function BildingSite() {
    useEffect( () => {
        Animations('.leftbuilding');
        Animations('.rightbuilding');
        Animations('.topbuilding');
        Animations('.bottombuilding');
    });
    return ( 
        <section className='bilding-site' id='project3'>
            <div className='conteiner'>
                <div className='leftbuilding'><img src={leftbuilding} alt="leftbuilding" /></div>
                <div className='rightbuilding'><img src={rightbuilding} alt="rightbuilding" /></div>
                <div className='topbuilding'><img src={topbuilding} alt="topbuilding" /></div>
                <div className='bottombuilding'><img src={bottombuilding} alt="bottombuilding"/></div>
                <div className='shov-site'>
                    <p>BildingSite</p>
                    <button>Visit page!</button>
                </div>
            </div>
            
        </section>
    );
}

export default BildingSite;