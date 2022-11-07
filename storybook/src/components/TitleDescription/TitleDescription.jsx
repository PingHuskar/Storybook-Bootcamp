import React from 'react';
import PropTypes from 'prop-types';
import './titleDescription.css';


export const TitleDescription = ({ title, description }) => (
  <div className="container">
    <h1 className='title'>{title}</h1>
    <h3 className='description'>{description}</h3>
  </div>
)

TitleDescription.PropTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

TitleDescription.defaultProps = {
  title: "title here",
  description: "Description here",
}