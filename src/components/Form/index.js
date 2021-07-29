/* eslint-disable react/no-children-prop */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import './styles.css';
import changeProfileInfo from '../../redux/actions/changeProfileInfo';
import Button from '../Button';

function Form({ firstName, lastName, summary, changeProfileInfo, cerrarModal, image }) {
  const [user, setUser] = useState({
    firstName,
    lastName,
    summary,
  });

  const enviar = (event) => {
    event.preventDefault();
    changeProfileInfo({ ...user });
    cerrarModal();
  };

  const action = (event) => {
    event.preventDefault();
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form className='form_body' onSubmit={enviar}>
        <div className='label_form'>
          <div className='cabecera'>
            <h1>
              Perfil
            </h1>
            <div className=''>
              <img className='foto_avatar' src={image} alt='logo' />
            </div>
          </div>
          <div className='text_contet'>
            <label htmlFor='firstName' className='label_text label'> Nombre </label>
            <br />
            <input
              className='label text_input'
              onChange={action}
              id='firstName'
              value={user.firstName}
              name='firstName'
              type='text'
            />
            {' '}
            <br />
            <label htmlFor='lastName' className=' label_text label'> Apellido</label>
            <br />
            <input
              className='label text_input'
              name='lastName'
              id='lastName'
              onChange={action}
              value={user.lastName}
              type='lastName'
            />
            <br />
            <label htmlFor='summary' className='label'> Summary </label>
            <br />
            <textarea
              className='text_area'
              id='summary'
              onChange={action}
              value={user.summary}
              name='summary'
            />
            <Button callback={enviar} type='primary-button'> Guardar</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
Form.defaultProps = {
  open: false,
  titulo: 'perfil',
};

const mapStateToProps = (state) => {
  return {
    firstName: state?.students?.content?.firstName,
    lastName: state?.students?.content?.lastName,
    summary: state?.students?.content?.summary,
    image: state?.students?.content?.urlImage,
  };
};

const mapDispatchToProps = {
  changeProfileInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
