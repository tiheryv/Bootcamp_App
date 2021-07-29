/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import Chevron from '../../statics/right-chevron.png';
import './styles.css';

const AccordionItem = ({ title, content }) => {

  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className='accordion-item'>
        <div className="accordion-subtitle" onClick={() => setIsActive(!isActive)}>
          <img className='toggle' src={Chevron} aria-expanded={isActive} alt='Toggle Accordion' />
          <span>{title}</span>
        </div>
        <div className="accordion-content" aria-expanded={!isActive}>{content}</div>
      </div>
      <hr className='accordion-item__divider' />
    </>
  );
};

AccordionItem.defaultProps = {
  title: 'Accordion Element',
  content: 'Lorem ipsum dolor sit amet, quis culpa elit eiusmod incididunt voluptate elit irure ipsum nisi',
  };

export default AccordionItem;
