/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Button from '../Button';
import './styles.css';

export default function SecondForm({ title, dayNumber, classTheme, cerrarModal }) {

  const [description, setDescription] = useState('');

  const enviar = (event) => {
    event.preventDefault();
    cerrarModal();
  };

  const action = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };

  return (
    <div>
      <form className='form_body' onSubmit={enviar}>
        <div className='label_form'>

          <div className='header'>
            <h1>
              {' '}
              {title}
              {' '}
            </h1>
          </div>

          <span>
            Día
            {dayNumber}
            {' '}
            -
            {classTheme}
          </span>
          <br />

          <label htmlFor='summary' className='label_summary' />
          <br />
          <textarea
            id='summary'
            className='label text_area'
            placeholder='Summary...'
            onChange={action}
            value={description}
            name='summary'
          />

          <select className='Form__Select'>
            <option value='trainer'>Trainer..</option>
            <option value='Miguel Romero'>Miguel Romero</option>
            <option value='Ruben Pantoja'>Rúben Pantoja</option>
            <option value='Ad Quintero'>Ad Quintero</option>
          </select>
          <Button callback={enviar} type='primary-button'> Guardar</Button>
        </div>

      </form>
    </div>
  );
}
SecondForm.defaultProps = {
  open: false,
  classTheme: 'CSS',
  dayNumber: '1',
  title: 'Agenda',
};

