import './NavComponent.scss';

import Github from '../../assets/img/Github.svg'
import Instagram from '../../assets/img/Instagram.svg'
import Telegram from '../../assets/img/Telegram.svg'
import LinkedIn from '../../assets/img/LinkedIn.svg'

function NavComponent() {
    return ( 
        <nav>
            <ul>
                <li><a href=""><img src="" alt="" /></a></li>
                <li><a href=""><img src="" alt="" /></a></li>
                <li><a href=""><img src="" alt="" /></a></li>
                <li><a href=""><img src="" alt="" /></a></li>
                <li><a href=""><img src={Telegram} alt="" /></a></li>
                <li><a href=""><img src={Instagram} alt="" /></a></li>
                <li><a href=""><img src={LinkedIn} alt="" /></a></li>
                <li><a href=""><img src={Github} alt="" /></a></li>
            </ul>
        </nav>
    );
}

export default NavComponent;