import React from 'react';
import './styles.css'
import {Button, Form} from "react-bootstrap";
import getFormatDate from "../../functions/getFormatDate";
import {useDispatch} from "react-redux";
import {hotelsFetching} from "../../redux/reducers/hotelSlice";


const HotelForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const location = e.target.location.value;
    const checkIn = e.target.checkIn.value;
    const count = e.target.count.value
    const date = new Date(checkIn)
    date.setDate(date.getDate() + (+count));
    const checkOut = getFormatDate(date);
    dispatch(hotelsFetching({location, checkIn, checkOut, count}));
  }

  return (
    <div className='hotel-form block__window'>
      <Form
        noValidate
        onSubmit={handleSubmit}
        className='w-100'
      >
        <Form.Group className='mb-3'>
          <Form.Label>Локация</Form.Label>
          <Form.Control
            name='location'
            type='text'
            defaultValue='Москва'
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Дата Заселения</Form.Label>
          <Form.Control
            name='checkIn'
            type='date'
            defaultValue={getFormatDate(new Date())}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Количество дней</Form.Label>
          <Form.Control
            name='count'
            type='number'
            defaultValue={1}
            min={1}
          />
        </Form.Group>
        <Button className='btn' type='submit'>
          Найти
        </Button>
      </Form>
    </div>
  );
};

export default HotelForm;