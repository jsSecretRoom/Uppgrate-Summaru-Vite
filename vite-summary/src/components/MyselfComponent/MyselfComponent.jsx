import './MyselfComponent.scss'

import MyFoto from '../../assets/my-foto.png'
import Animations from '../Animations/Animations';
import { useEffect, useMemo } from 'react';
function MyselfComponent() {
    useEffect(() => {  
        Animations('.animation-block');
        Animations('.myself');
    });
    return ( 
        <section className='myself' id="user">
            <div className='deco-collor'></div>
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
                <p>On this page you can: get to know me, explore my personal projects, get to know my creative endeavors and achievements, read my diary and leave a review about me, and contact me.</p>
            </div>
            <div className='avatar'>
                <div className='animation-block'>
                    <div className='avatar-conteiner'>
                        <img src={MyFoto} alt="MyFoto" />
                    </div>
                    <div className='my-comteiner'>
                        <h2>My name is Ruslan!</h2>
                        <p>I'm 23 years old, and I live in Mykolaiv, Ukraine. I am a frontend developer working in the field of web development. My goal is to achieve noticeable results and enhance the quality of user interfaces.
                            My skills in quick learning and working at a high pace help me effectively reach set objectives. I always adhere to modern coding standards and apply the latest methods when necessary. My aim is to create user interfaces that meet the new standards of quality."</p>
                    </div>
                </div>
            </div>

            <div className='next-info'>
                <p>I'm working with:</p>
                <ul>
                    <li>React Router</li>
                    <li>Redux + Tulkit</li>
                    <li>Axios</li>
                    <li>SCSS modules</li>
                    <li>React Select</li>
                    <li>React Hook Form</li>
                    <li>js-Cookie</li>
                    <li>React Query</li>
                </ul>
            </div>
        </section>
    );
}

export default MyselfComponent;