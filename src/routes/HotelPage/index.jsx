import React, {useEffect} from 'react';
import './styles.css'
import Header from "../../components/Header";
import HotelForm from "../../components/HotelForm";
import HotelFavorites from "../../components/HotelFavorites";
import HotelResults from "../../components/HotelResults";
import getFormatDate from "../../functions/getFormatDate";
import {useDispatch} from "react-redux";
// import {fetchHotels} from "../../redux/actionCreators/fetchHotels";
import {hotelsFetching} from "../../redux/reducers/hotelSlice";


const HotelPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const location = "Москва";
    const checkIn = getFormatDate(new Date());
    const count = 1;
    const date = new Date(checkIn)
    date.setDate(date.getDate() + (+count));
    const checkOut = getFormatDate(date);
    dispatch(hotelsFetching({location, checkIn, checkOut, count}));
  }, [])


  return (
    <div className="hotel">
      <Header/>
      <div className='hotel__main'>
        <div className='hotel__col1'>
          <HotelForm/>
          <HotelFavorites/>
        </div>
        <HotelResults/>
      </div>
    </div>
  );
};

export default HotelPage;