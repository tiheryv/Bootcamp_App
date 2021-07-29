import ReactDom from 'react-dom';
import React from 'react';
import Form from '../Form';
import Accordion from '../Accordion';
import SecondForm from '../SecondForm';
// eslint-disable-next-line import/no-cycle
import Agenda from '../Agenda';
import './styles.css';

export default function Modal({ componente, children, open, cerrarModal, verModal }) {
  if (open === false) return null;
  return ReactDom.createPortal(
    <div className='Padre-modal'>
      <div className='perfil_modal'>
        {componente === 'Formulario' ? (
          <div>
            <Form cerrarModal={cerrarModal} />
            {children}
          </div>
        ) : componente === 'Feedback_Accordeon' ? (
          <div>
            {' '}
            <Accordion />
            {children}
          </div>
        ) : componente === 'Agenda' ? (
          <div>
            {' '}
            <Agenda verModal={verModal} cerrarModal={cerrarModal} />
            {children}
          </div>
        ) : componente === 'Agenda_Edit' ? (
          <div>
            {' '}
            <SecondForm cerrarModal={cerrarModal} />
            {children}
          </div>
        ) :
          (
            <p>
              {' '}
              No le llego ningun componente al modal
              {children}
            </p>
          )}
      </div>
    </div>,
    document.getElementById('portal'),
  );
}

Modal.defaultProps = {
  css: 'perfil_modal',
  componente: '-',
  open: true,
};
