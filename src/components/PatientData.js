import React from 'react';

export default class PatientData extends React.Component {
  static propTypes = {};

  render() {
    return (
      <div className="PatientData">
        <div className="row">
          <div className="col-sm-3">
            <img className="picture img-circle" src="dist/img/patient1.jpg"/>
          </div>
          <div className="col-sm-9">
            <div className="dataFullName">
              John Doe
            </div>
            <div className="dataOther">Female</div>
            <div className="dataOther">DOB: March 25th, 1984</div>
          </div>
        </div>
      </div>
    );
  }
}
