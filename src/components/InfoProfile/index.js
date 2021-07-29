import React from 'react';
import { connect } from 'react-redux';
import ProfileData from '../ProfileData';
import Loading from '../Loading';
import Profile from '../../statics/user_icon_512px.png';
import './styles.css';

function InfoProfile({ rol, trainingName, location, image, loading }) {

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='wrapper profile'>
      <div className='profile__image'>
        <img alt='profile' src={image} />
      </div>
      <ProfileData />
      <div className='profile__info'>
        <div className='info__container'>
          <h2>Bootcamp</h2>
          <span>{trainingName}</span>
        </div>
        <div className='info__container'>
          <h2>Ubicacion</h2>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}

InfoProfile.defaultProps = {
  rol: 'Trainer',
  bootcamp: 'Web UI',
  location: '',
  image: Profile,
};

const mapStateToProps = (state) => {
  return {
    location: state?.students?.content?.location,
    trainingName: state?.students?.content?.training?.trainingName,
    loading: state?.students?.loading,
    image: state?.students?.content?.urlImage,
  };
};

export default connect(mapStateToProps, null)(InfoProfile);
