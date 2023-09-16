import './CardsProject.scss';

import Card1 from '../../assets/card1.svg';
import Card2 from '../../assets/card2.svg';
import Card3 from '../../assets/card3.svg';

function CardsProject() {
    return ( 
        <section className='project1'>
            <div className='card-conteiner'>
                <p>Product cart creator!</p>
                <div className='cards'>
                    <div className='cards-img'><img src={Card1} alt="" /></div>
                    <div className='cards-img'><img src={Card2} alt="" /></div>
                    <div className='cards-img'><img src={Card3} alt="" /></div>
                </div>
                
                <a href='https://cards-creator-vite.vercel.app/'> <button>Visit page!</button></a>
            </div>
        </section>
    );
}

export default CardsProject;