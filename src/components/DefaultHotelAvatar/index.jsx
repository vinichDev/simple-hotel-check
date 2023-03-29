import React from 'react';
import './styles.css'
import {ReactComponent as HouseIcon} from "../../images/house.svg";

const DefaultHotelAvatar = () => {
  return (
    <div className='avatar-wrapper'>
      <HouseIcon className='avatar-icon'/>
    </div>
  );
};

export default DefaultHotelAvatar;