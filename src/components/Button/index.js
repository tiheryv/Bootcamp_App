import React from 'react';
import './styles.css';

export default function Button({ children, type = null, callback }) {
  let className = 'button';
  if (type) {
    className = `${className} ${type}`;
  }

  return (
    <div>
      <button className={className} onClick={callback} type='button'>
        {children}
      </button>
    </div>
  );
}

Button.defaultProps = {
  callback: () => {
    console.log('Hiciste click en el botón sin definir un callback!');
  },
};
