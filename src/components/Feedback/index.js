
import React from 'react';
import { connect } from 'react-redux';
import BottomCard from '../BottomCard';
import './styles.css';

const Feedback = ({ title, homework }) => {
  return (
    <>
      <BottomCard>
        <div className='feedback-container'>
          <span className='feedback-title'>{title}</span>
          <ul className='feedback-items'>
            {homework.map((asignment) => (
              <li className='feedback-item' key={asignment.id}>
                <a href='/'>
                  {asignment.homeworkName}
                  {' '}
                  -
                  {' '}
                  {asignment.homeworkDetails}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </BottomCard>
    </>
  );

};

Feedback.defaultProps = {
  title: 'Feedback',
  asignments: [{ id: 1,
    homeworkName: 'Tarea',
    homeworkDetails: 'Magazine Layout',
    status: true,
  },
  {
    id: 2,
    homeworkName: 'Tarea',
    homeworkDetails: 'Codewars Katas',
    status: true,
  },
  {
    id: 3,
    homeworkName: 'Tarea',
    homeworkDetails: 'Puzzle JS',
    status: true,
  },
  ],
};

const mapStateToProps = (state) => {
  return {
    homework: state?.schedule?.content?.homeworkRDTOList,
  };
};

export default connect(mapStateToProps, null)(Feedback);
