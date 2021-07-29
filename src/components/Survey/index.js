import React from 'react';
import BottomCard from '../BottomCard';
import Like from '../../statics/like.svg';
import Dislike from '../../statics/dislike.svg';
import './styles.css';

function Survey() {
  return (
    <BottomCard>
      <span className='survey__title'>Dia 1 - CSS Survey</span>
      <div className='survey__vote'>
        <button className='button__like' type='button'>
          <img className='vote__like' src={Like} alt='like' />
        </button>
        <button className='button__dislike' type='button'>
          <img className='vote__dislike' src={Dislike} alt='dislike' />
        </button>

      </div>
    </BottomCard>
  );
}

export default Survey;
