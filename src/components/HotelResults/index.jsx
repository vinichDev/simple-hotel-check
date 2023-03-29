import React from 'react';
import {ReactComponent as ArrowIcon} from "../../images/arrow.svg";
import './styles.css'
import HotelCard from "../HotelCard";
import DefaultHotelAvatar from "../DefaultHotelAvatar";
import {useSelector} from "react-redux";
import {selectFavorites, selectHotelsResults} from "../../redux/selectors";
import getHotelDeclination from "../../functions/getHotelDeclination";

const HotelResults = () => {
  const {isLoading, checkIn, location, hotels} = useSelector(selectHotelsResults);
  const favorites = useSelector(selectFavorites)
  const favoritesCount = favorites.length;

  const getCheckInHeaderFormat = (checkIn) => (
    new Intl.DateTimeFormat(
      'ru-Ru',
      {year: 'numeric', month: 'long', day: '2-digit',}
    )
      .format(new Date(checkIn))
      .slice(0, -3)
  )

  const checkIsFavorite = (hotel) => (
    Boolean(favorites.find(fav => {
      return fav.id === hotel.id
    }))
  )

  return (
    <div className='hotel-results block__window'>
      <div className='hotel-results__header'>
        <div className='hotel-results__title'>
          <h1>Отели</h1>
          <ArrowIcon className='hotel-results__header-arrow'/>
          <h1>{location}</h1>
        </div>
        <div className='hotel-results__header-date'>
          {checkIn && getCheckInHeaderFormat(checkIn)}
        </div>
      </div>
      <div className='hotel-results__carousel'>
        <img className='hotel-results__image' src='static/images/image1.png' alt="image"/>
        <img className='hotel-results__image' src='static/images/image3.png' alt="image"/>
        <img className='hotel-results__image' src='static/images/image2.png' alt="image"/>
        <img className='hotel-results__image' src='static/images/image1.png' alt="image"/>
      </div>
      <div className="hotel-results__favorites-text">
        Добавлено в избранное:
        <span className="hotel-results__favorites-count"> {favoritesCount} </span>
        {getHotelDeclination(favoritesCount)}
      </div>
      <div className="hotel-results__list">
        {isLoading || hotels.map(hotel =>
          <div
            className='hotel-results__row'
            key={hotel.id}
          >
            <DefaultHotelAvatar/>
            <HotelCard
              hotel={hotel}
              favorite={checkIsFavorite(hotel)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelResults;