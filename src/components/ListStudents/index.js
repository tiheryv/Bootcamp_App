import React from 'react';

export default function ListStudents({ titulo, listName }) {
  const listNameStudets = listName.map((name) => <li><a href='/'>{name}</a></li>);
  return (
    <div className='ListStudents'>
      <h2>
        {' '}
        { titulo }
      </h2>
      <h3>Alumnos</h3>
      <ul>
        {listNameStudets}
      </ul>
    </div>
  );
}

ListStudents.defaultProps = {
  list_name: ['Alejandra G moreno', 'Alex Camacho', 'Victor Cruz'],
};
