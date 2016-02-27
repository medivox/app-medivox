import React from 'react';

export default class PatientData extends React.Component {
  static propTypes = {};

  render() {
    return (
      <div className="PatientData">
        <div className="row-fluid">
          <div className="col-sm-4">
            <img className="img-circle" src="http://placehold.it/140x140"/>
          </div>
          <div className="col-sm-8">

          </div>
        </div>
      </div>
    );
  }
}
