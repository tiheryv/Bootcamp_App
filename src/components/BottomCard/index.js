import React from 'react';

import './styles.css';

const BotomCard = ({ children }) => {
  return (
    <div className='wrapper botomcard-container'>
      {children}
    </div>
  );
};

export default BotomCard;
