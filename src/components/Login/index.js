/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import arrowLogo from '../statics/G.png';
import Button from '../Button';
import loginRequest from '../../redux/actions/loginRequest';

import './styles.css';

const eye = <FontAwesomeIcon icon={faEye} />;

function Login({ auth }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
      rol: 'student',
    },
  });
  const [passwordInput, setInput] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const switchInput = (input) => {
    setInput(input);
  };

  const onSubmit = (data) => {
    dispatch(loginRequest(data.username, data.rol));
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    if (auth) {
      history.push('/');
    }
  }, [auth]);

  return (
    <div className='Login__component'>
      <div className='login__container'>
        <div className='form'>
          <div className='form__logo'>
            <span className='form__logo--title'>Talent</span>
            <img src={arrowLogo} alt='logo' />
          </div>
          <div className='form__input'>
            {!passwordInput ? (
              <div className='form__input--container'>
                <label htmlFor='name'>Dirección email</label>
                <input
                  id='name'
                  className='input'
                  {...register('username', { required: 'This is required.' })}
                  type='text'
                />
                <select className='select' {...register('rol')}>
                  <option value='student'>Estudiante</option>
                  <option value='trainer'>Trainer</option>
                </select>
                <div className='form__button'>
                  <Button
                    type='primary-button'
                    callback={() => switchInput(!passwordInput)}
                  >
                    <span>Siguiente</span>
                  </Button>
                </div>
              </div>
            ) : (
              <div className='form__input--container'>
                <label htmlFor='password'>Contraseña</label>
                <input
                  id='password'
                  className='input'
                  {...register('password', { required: 'This is required.' })}
                  type={passwordShown ? 'text' : 'password'}
                />
                <i role='button' tabIndex={0} onClick={togglePasswordVisiblity}>
                  {eye}
                </i>
                <div className='form__button'>
                  <Button
                    type='primary-button'
                    callback={handleSubmit(onSubmit)}
                  >
                    <span>Iniciar Sesión</span>
                  </Button>
                  <Button
                    type='other'
                    callback={() => switchInput(!passwordInput)}
                  >
                    <span>Usar otra cuenta</span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Login.defaultProps = {
  auth: false,
};

const mapStateToProps = (state) => {
  return {
    auth: state?.students?.auth,
  };
};

export default connect(mapStateToProps, null)(Login);
