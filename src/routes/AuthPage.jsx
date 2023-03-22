import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const AuthPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  })
  console.log(form)
  const navigate = useNavigate();

  const findFormErrors = () => {
    const {email, password} = form
    const newErrors = {}
    const validateEmailRegex = /^\S+@\S+\.\S+$/;
    const checkCyrillicRegex = /[\u0401\u0451\u0410-\u044f]/;
    if (!validateEmailRegex.test(email)) {
      console.log(123123)
      newErrors.email = 'Некорректный email'
    }
    if (password.length < 8 || checkCyrillicRegex.test(password)) {
      newErrors.password = 'Пароль не должен содержать символы кириллицы и должен иметь длину минимум 8 символов'
    }
    return newErrors
  }

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    if (!!errors[e.target.name]) setErrors({
      ...errors,
      [e.target.name]: null
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newErrors = findFormErrors()
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors)
    } else {
      navigate('/')
    }
  }

  return (
    <div className="auth">
      <div className="auth__blur">
        <div className='auth__form d-flex flex-column align-items-center'>
          <h2 className='auth__title'>Simple Hotel Check</h2>
          <Form noValidate
                onSubmit={handleSubmit}
                style={{width: '345px'}}>
            <Form.Group className='auth__group'>
              <Form.Label>Логин</Form.Label>
              <Form.Control
                name='email'
                type='email'
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='auth__group'>
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                name='password'
                type='password'
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Button className='btn' type='submit'>
              Войти
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;