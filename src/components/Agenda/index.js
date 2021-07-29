import React, { useState } from 'react';
import { connect } from 'react-redux';
import Icon from '../../statics/icon.png';

import './styles.css';

function Agenda({ type, contenido, cerrarModal, verModal }) {
  const [abierto, SetAbierto] = useState(false);

  const listAgendaStudent = contenido.map((dia) => (
    <li key={dia}>
      {dia}
      <hr />
      {' '}
    </li>
  ));
  const listAgendaTrainer = contenido.map((dia) => (
    <li key={dia} className='Agenda'>
      <span>
        {' '}
        *
        {dia}
      </span>
      <img className='Agenda__icon' onClick={() => (SetAbierto(!abierto))} src={Icon} alt='Icon' />
      <hr />
      {' '}
    </li>
  ));
  function SwitchAgenda() {
    switch (type) {
      case 'student': return (
        <div>
          <h2>agenda</h2>
          <ul>
            {listAgendaStudent}
          </ul>
        </div>
      );
      case 'trainer': return (
        <div>
          <h2>Agenda</h2>
          <ul>
            {listAgendaTrainer}
            {
              abierto === true ? (
                <div>
                  {verModal('Agenda_Edit')}
                </div>
              ) : (
                <div>
                  {console.log('nada')}
                </div>
              )
            }
          </ul>
        </div>
      );
      default: return (
        <div>
          Nunca deberia llegar aqui, ten cuidado si esto pasa D:
        </div>
      );
    }
  };

  return (
    <div>
      {SwitchAgenda()}
    </div>
  );
}
Agenda.defaultProps = {
  contenido: [' Dia 1 - Css', 'Dia 2 - HTML Semantico', 'Dia 3 -Js Basics'],
  tipo: 'trainer',

};

const mapStateToProps = (state) => {
  return {
    type: state?.students?.type,
  };
};

export default connect(mapStateToProps, null)(Agenda);
