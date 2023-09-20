import './NavComponent.scss';

import Skill from '../../assets/img/skill.svg';
import User from '../../assets/img/User_alt_fill.svg';
import Github from '../../assets/img/Github.svg';
import Instagram from '../../assets/img/Instagram.svg';
import Telegram from '../../assets/img/Telegram.svg';
import LinkedIn from '../../assets/img/LinkedIn.svg';
import Project1 from '../../assets/img/project1.svg';
import Project2 from '../../assets/img/project2.svg';
import Project3 from '../../assets/img/project3.svg';
import Storys from '../../assets/img/storis.svg';
import Phone from '../../assets/img/phone.svg'
function NavComponent() {
    return ( 
        <nav>
            <div className='nav-conteiner'>
                <ul>
                    <li><a href=""><img src={User} alt="User" /></a></li>
                    <li><a href=""><img src={Skill} alt="Skill" /></a></li>
                    <li><a href=""><img src={Project1} alt="Project1" /></a></li>
                    <li><a href=""><img src={Project2} alt="Project2" /></a></li>
                    <li><a href=""><img src={Project3} alt="Project3" /></a></li>
                    <li><a href=""><img src={Storys} alt="Storys" /></a></li>
                    <li><a href=""><img src={Telegram} alt="Telegram" /></a></li>
                    <li><a href=""><img src={Instagram} alt="Instagram" /></a></li>
                    <li><a href=""><img src={LinkedIn} alt="LinkedIn" /></a></li>
                    <li><a href=""><img src={Github} alt="Github" /></a></li>
                    <li><a href=""><img src={Phone} alt="Phone" /></a></li>
                </ul>
            </div>
            
        </nav>
    );
}

export default NavComponent;