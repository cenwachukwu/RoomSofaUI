import React from 'react';
import './Pills.scss';

const Pills = (props) => {
  console.log(props.props);
  return (
    <div className="Pills">
      <a href="#">
        <img src={props.props} />
      </a>
      <div>
        <a href="#">{props.categoryName}</a>
      </div>
    </div>
  );
};

export default Pills;
