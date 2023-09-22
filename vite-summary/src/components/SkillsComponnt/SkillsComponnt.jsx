import './SkillsComponnt.scss'
import { useEffect } from 'react';
import Animations from '../Animations/Animations';

function SkillsComponnt() {

    useEffect(()=>{
        Animations('.soft');
        Animations('.hard');
        Animations('.others');
    })
    return ( 
        <section className='skills' id='skills'>
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
    );
}

export default SkillsComponnt;