
import React from 'react';
import BottomCard from '../BottomCard';
import './styles.css';

const StudentList = ({ title, students }) => {
  return (
    <>
      <BottomCard>
        <div>
          <span className='students-title'>{title}</span>
          <ul className='students-items'>
            {students.map((student) => (
              <li className='students-item' key={student.id}>
                <a href='/'>
                  {student.firstName}
                  {' '}
                  {student.lastName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </BottomCard>
    </>
  );
};

StudentList.defaultProps = {
  title: 'Mis Alumnos',
  students: [{ id: 1,
    email: 'firstStudent@students.com',
    firstName: 'Eduardo',
    lastName: 'Torres',
    location: 'Guadalajara',
    summary: 'Es muy cool',
    training: 1,
    status: true,
  },
  {
    id: 2,
    email: 'secondStudent@students.com',
    firstName: 'Jaime',
    lastName: 'Hurtado',
    location: 'Tuxtla Gutiérrez',
    summary: 'Es muy cool',
    training: 1,
    status: true,
  },
  {
    id: 3,
    email: 'thirdStudent@students.com',
    firstName: 'Ruben',
    lastName: 'Carpinteyro',
    location: 'Puebla',
    summary: 'Es muy cool',
    training: 1,
    status: true,
  },
  ],
};

export default StudentList;
