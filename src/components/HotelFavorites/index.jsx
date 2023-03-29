import React, {useRef, useState} from 'react';
import './styles.css'
import FilterButton from "../FilterButton";
import HotelCard from "../HotelCard";
import {useSelector} from "react-redux";
import getSortedFavorites from "../../functions/getSortedFavorites";
import {selectFavorites} from "../../redux/selectors";


const HotelFavorites = () => {
  const favorites = useSelector(selectFavorites);
  const [filterType, setFilterType] = useState(null)
  const [isFilterIncrease, setIsFilterIncrease] = useState(true);
  const priceRef = useRef(null);
  const ratingRef = useRef(null);

  const sortedFavorites = getSortedFavorites(favorites, filterType, isFilterIncrease);


  const toggleFilter = (e) => {
    const filterName = e.currentTarget.name;
    if (filterName === filterType) {
      setIsFilterIncrease(!isFilterIncrease);
    } else {
      if (filterName === 'price') {
        priceRef.current.classList.add('filter-active');
        ratingRef.current.classList.remove('filter-active');
      } else {
        priceRef.current.classList.remove('filter-active');
        ratingRef.current.classList.add('filter-active');
      }
      setFilterType(filterName);
      setIsFilterIncrease(true);
    }
  }

  return (
    <div className='hotel-favorites block__window'>
      <h2>Избранное</h2>
      <div className='hotel-favorites__filter'>
        <FilterButton
          name={'rating'}
          text={'Рейтинг'}
          filterType={filterType === 'rating'}
          filterOrder={isFilterIncrease}
          toggleFilter={toggleFilter}
          filterRef={ratingRef}
        />
        <FilterButton
          name={'price'}
          text={'Цена'}
          filterType={filterType === 'price'}
          filterOrder={isFilterIncrease}
          toggleFilter={toggleFilter}
          filterRef={priceRef}
        />
      </div>
      <div className='hotel-favorites__list'>
        {sortedFavorites.map((fav) =>
          <div
            className='hotel-favorites__row'
            key={fav.id}
          >
            <HotelCard
              hotel={fav}
              favorite
            />
          </div>
        )}
      </div>
    </div>

  );
};

export default HotelFavorites;