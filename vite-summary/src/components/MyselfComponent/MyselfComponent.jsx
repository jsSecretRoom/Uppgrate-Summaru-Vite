import './MyselfComponent.scss'

import MyFoto from '../../assets/my-foto.png'
import Animations from '../Animations/Animations';
import { useEffect } from 'react';
function MyselfComponent() {
    useEffect(() => {   
        Animations('.avatar-conteiner');
        Animations('.my-comteiner');
    });
    return ( 
        <section className='myself' id="user">
            <div className='greeting'><h1>Nice to meet you!</h1></div>
            <div className='status'><p>find-work!</p></div>
            <div className='stak-info'>
                <ul>
                    <li>Stack:</li>
                    <li>React + Vite</li>
                    <li>JS & Node.js</li>
                    <li>Firebase</li>
                </ul>
            </div>
            <div className='greeting-text'>
                <p>I'm a front end developer. On this page you will see my projects and learn about my technology stack.</p>
            </div>
            <div className='avatar'>
                <div className='avatar-conteiner'>
                    <img src={MyFoto} alt="MyFoto" />
                </div>
            </div>
            <div className='about-my'>
                <div className='my-comteiner'>
                    <h2>My name is Ruslan!</h2>
                    <p>I am 23 years old, Mykolaiv Ukaina! I do most of the development in the second half of the year and get results in your field! At this stage, you can find your job, recognition, etc. d. projects with the possibility of their assessment! My metabolic rate and speed! I use new standards for writing code that validates new ones methods where necessary.</p>
                </div>
            </div>
            <div className='next-info'>
                <p>next-info:</p>
                <ul>
                    <li>wewewewew</li>
                    <li>wewewewew</li>
                    <li>wewewewew</li>
                    <li>wewewewew</li>
                    <li>wewewewew</li>
                </ul>
            </div>
        </section>
    );
}

export default MyselfComponent;