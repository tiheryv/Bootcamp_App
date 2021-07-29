import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainInfo from '../../components/MainInfo';
import InfoProfile from '../../components/InfoProfile';
import Feedback from '../../components/Feedback';
import AsideButton from '../../components/AsideButton';
import Survey from '../../components/Survey';
import Button from '../../components/Button';
import Modal from '../../components/Modal';

import './styles.css';

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [component, setComponent] = useState('');
  const actionModal = (componentName) => {
    setComponent(componentName);
    setOpen(!open);
  };
  const verModal = (component) => {
    return (
      <Modal verModal={verModal} cerrarModal={actionModal} componente={component} open={open}>
        <Button callback={() => setOpen(!open)} type='secondary-button'> Cerrar </Button>
      </Modal>
    );
  };

  return (
    <div className='dashboard'>
      <Header action={() => actionModal('Formulario')} />
      <div className='dashboard__container'>
        <div className='dashboard-grid'>
          <section className='dashboard__userCard'>
            <InfoProfile />
          </section>
          <section className='dashboard__main'>
            <MainInfo />
          </section>
          <section className='dashboard__buttons wrapper'>
            <AsideButton lbl='Editar Perfil' action={() => actionModal('Formulario')} />
            <AsideButton lbl='Ver Agenda' action={() => actionModal('Agenda')} />
            <AsideButton lbl='Ver Feedback' action={() => actionModal('Feedback_Accordeon')} />
          </section>
          <section className='dashboard__feedback'>
            <Feedback />
          </section>
          <section className='dashboard__survey'>
            <Survey />
          </section>
        </div>
      </div>
      <Footer />
      {verModal(component)}
    </div>
  );
}

export default Dashboard;
