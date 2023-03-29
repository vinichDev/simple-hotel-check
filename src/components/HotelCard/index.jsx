import React from 'react';
import './styles.css'
import {ReactComponent as StarIcon} from "../../images/star.svg";
import {ReactComponent as StarActiveIcon} from "../../images/star-active.svg";
import {ReactComponent as FavoriteIcon} from "../../images/favorite.svg";
import getDayDeclination from "../../functions/getDayDeclination";
import {useDispatch} from "react-redux";
import {addToFavorites, removeFromFavorites} from "../../redux/reducers/favoriteSlice";

const HotelCard = ({hotel, favorite}) => {
  const dispatch = useDispatch();

  const id = hotel.id;
  const name = hotel.name;
  const checkIn = new Intl.DateTimeFormat(
    'ru-Ru',
    {year: 'numeric', month: 'long', day: 'numeric',}
  ).format(new Date(hotel.checkIn)).slice(0, -3);
  const count = hotel.count;
  const stars = hotel.stars;
  const price = new Intl.NumberFormat('ru-RU').format(hotel.price);

  const handleClick = () => {
    if(favorite) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(hotel));
    }
  }

  return (
    <div className='hotel-card'>
      <div className='d-flex justify-content-between'>
        <div className='hotel-card__title'>{name}</div>
        <FavoriteIcon
          className={`favorite ${favorite && 'favorite_active'}`}
          onClick={handleClick}
        />
      </div>

      <div className='hotel-card__date-row'>
        {checkIn || '28 June, 2020'}
        <div className='hotel-card__date-dash'></div>
        {`${count}  ${getDayDeclination(count)}`}
      </div>
      <div className='hotel-card__rating-price-row'>
        <div className="hotel-card__rating">
          {
            [1, 2, 3, 4, 5].map((v) => (
              v <= stars
                ? <StarActiveIcon key={v} className='star'/>
                : <StarIcon key={v} className='star'/>

            ))
          }
        </div>
        <div className='hotel-card__price-block'>
          <div className='hotel-card__price-title'>Price:</div>
          <div className='hotel-card__price'>{price} ₽</div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;