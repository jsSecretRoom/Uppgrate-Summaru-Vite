import './CardComponent.scss';
import DefaultImage from '../../assets/img/errorImg.svg';
import FavoriteImg from '../../assets/img/Favorite.svg';
import Animations from '../Animations/Animations';
import { useEffect } from 'react';

function CardComponent({ randomCard }) {

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  }
  useEffect( () => {
    Animations('.card');
  })

  return (
    <div className="card" style={{
      backgroundColor: randomCard ? (
        randomCard.indicatorNewKey ? '#45FF58' :
        randomCard.indicatorPopularKey ? '#FF7D34' :
        randomCard.indicatorIncludeKey ? '#373737' :
        '#61c8ff'
      ) : '#61c8ff'
    }}>
      <div className='card-head'>
        <div className='fichs'>
          <div className='body-collor'>
            {randomCard ? (
              randomCard.indicatorNewKey && (
                <p style={{ backgroundColor: '#45FF58' }}>Новинка!</p>
              )
            ) : null}
            {randomCard ? (
              randomCard.indicatorPopularKey && (
                <p style={{ backgroundColor: '#FF7D34' }}>Топ продаж!</p>
              )
            ) : null}
            {randomCard ? (
              randomCard.indicatorIncludeKey && (
                <p style={{ backgroundColor: '#373737' }}>Нема в наявності!</p>
              )
            ) : null}
            {!randomCard || (!randomCard.indicatorNewKey && !randomCard.indicatorPopularKey && !randomCard.indicatorIncludeKey) ? (
              <p style={{ backgroundColor: '#61c8ff' }}>change</p>
            ) : null}
            <img src={FavoriteImg} alt="FavoriteImg" />
          </div>
        </div>
        <div className='product-foto'>
          <img src={randomCard?.productPhotoKey || DefaultImage} alt="" />
        </div>
        <div className='warning-fich'>
          {randomCard ? (
            randomCard.indicatorEndKey && (
              <p>Закінчуеться!</p>
            )
          ) : null}
        </div>
      </div>
      <div className='card-body'>
        <div className='card-deskription'>
          <p className='product-name'>{randomCard ? (
            `${truncateText(randomCard.productNameKey, 28)}`
          ) : null} <span className='desc'>{randomCard ? (
            `${truncateText(randomCard.productDescriptionKey, 34)}`
          ) : null}</span></p>
        </div>
        <div className='charecters'>
          <div className='price-info'>
            {randomCard ? (
              randomCard.indicatorDiscountKey ? (
                <p className='price' style={{ textDecoration: 'line-through', fontSize: '16px' }}>
                  {randomCard.initialPriceKey}$
                </p>
              ) : (
                <p className='price' style={{ textDecoration: 'none', fontSize: '22px' }}>
                  {randomCard.initialPriceKey}$
                </p>
              )
            ) : null}
            {randomCard ? (
              randomCard.indicatorDiscountKey ? (
                <p className='discountedPrice'>{randomCard.discountedPriceKey}$</p>
              ) : (
                <p className='discountedPrice'></p>
              )
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;