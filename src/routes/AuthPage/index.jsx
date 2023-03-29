import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import './styles.css'

const AuthPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  })
  const navigate = useNavigate();

  const findFormErrors = () => {
    const {email, password} = form
    const newErrors = {}
    const validateEmailRegex = /^\S+@\S+\.\S+$/;
    const checkCyrillicRegex = /[\u0401\u0451\u0410-\u044f]/;
    if (!validateEmailRegex.test(email)) {
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
      setErrors(newErrors)
    } else {
      localStorage.setItem('isAuth', 'true');
      navigate('/');
    }
  }

  return (
    <div className="auth">
      <div className="auth__blur">
        <div className='auth__form block__window'>
          <h2 className='auth__title'>Simple Hotel Check</h2>
          <Form className='w-100'
            noValidate
            onSubmit={handleSubmit}
          >
            <Form.Group className='auth__group mb-4'>
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