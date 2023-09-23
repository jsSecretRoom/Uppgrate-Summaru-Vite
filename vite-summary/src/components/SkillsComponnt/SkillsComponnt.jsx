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
                        <li>Creative.</li>
                        <li>Not conflicting.</li>
                        <li>Stress resistant.</li>
                        <li>Punctual.</li>
                        <li>Organized.</li>
                        <li>English B1.</li>
                        <li>I know how to convince.</li>
                        <li>I know how to evaluate people.</li>
                        <li>I'm quick to look for information</li>
                        
                    </ul>
                    </div>
                    <div className='hard'>
                    <p>Hard</p>
                    <ul>
                        <li>Knowledge of basic backend technologies.</li>
                        <li>Understanding the REST API.</li>
                        <li>JavaScript.</li>
                        <li>JSX/HTML/SCSS.</li>
                        <li>Firestore.</li>
                        <li>React.</li>
                        <li>Development of adaptive interfaces.</li>
                        <li>Understanding UX/UI.</li>
                    </ul>
                    </div>
                    <div className='others'>
                    <p>Others</p>
                    <ul>
                        <li>Work with graphics.</li>
                        <li>Collaboration with chat GPT.</li>
                        <li></li>
                        <li>Photoshop</li>
                        <li>Figma</li>
                        <li></li>
                    </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsComponnt;