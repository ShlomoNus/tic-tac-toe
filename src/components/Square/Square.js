import React from 'react';
import PropTypes from 'prop-types';
import './Square.scss';

const Square = ({value,onClick}) =>  { 
  const style = value? `square ${value}`: 'square';

  return(
  <button className={style} onClick={onClick}>
  {value}
  </button>
)};

Square.propTypes = {};

Square.defaultProps = {};

export default Square;
