/* eslint-disable indent */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-quotes */
import React from 'react';
import { connect } from 'react-redux';
import AccordionItem from '../AccordionItem';
import './styles.css';

const Accordion = ({ headTitle, homework }) => {

  return (
    <>
      <div>
        <h1>{headTitle}</h1>
        <div className="accordion">
          {homework.map(({ homeworkName, homeworkDetails, id }) => (
            <AccordionItem key={id} title={homeworkName} content={homeworkDetails} />
          ))}
        </div>
      </div>
    </>
  );
};

Accordion.defaultProps = {
  headTitle: 'Feedback',
  content: [{
    homeworkName: 'Accordion Element',
    homeworkDetails: 'Lorem ipsum dolor sit amet, quis culpa elit eiusmod incididunt voluptate elit irure ipsum nisi',
    }],
  };

  const mapStateToProps = (state) => {
    return {
      homework: state?.schedule?.content?.homeworkRDTOList,
    };
  };

export default connect(mapStateToProps, null)(Accordion);
