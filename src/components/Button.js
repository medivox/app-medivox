import React from 'react';

const Button = ({ value, plusOne, minusOne }) => (
  <div>
    <button className="btn btn-info" onClick={plusOne}>
      <i className="fa fa-plus"/>
    </button>
    <button className="btn btn-info" onClick={minusOne}>
      <i className="fa fa-minus"/>
    </button>
    Button value {value}
  </div>
);

Button.displayName = 'Button';

Button.propTypes = {
  value: React.PropTypes.number.isRequired,
  plusOne: React.PropTypes.func.isRequired,
  minusOne: React.PropTypes.func.isRequired
};

export default Button;
