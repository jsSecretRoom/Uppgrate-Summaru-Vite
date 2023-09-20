import './BildingSite.scss';
import topbuilding from '../../assets/img/topbuilding.svg';
import bottombuilding from '../../assets/img/bottombuilding.svg';
import leftbuilding from '../../assets/img/leftbilding.svg';
import rightbuilding from '../../assets/img/rightBuilding.svg';

function BildingSite() {
    return ( 
        <section className='bilding-site'>
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