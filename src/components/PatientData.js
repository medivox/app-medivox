import React from 'react';

export default class PatientData extends React.Component {
  static propTypes = {
    patient: React.PropTypes.object
  };

  render() {
    return (
      <div className="PatientData">
        <div className="row">
          <div className="col-sm-3">
            <img className="picture img-circle" src={`dist/img/patient-${this.props.patient.get('patientId')}.jpg`}/>
          </div>
          <div className="col-sm-9">
            <div className="dataFullName">
              {this.props.patient.get('fullName')}
            </div>
            <div className="dataOther">{this.props.patient.get('gender')}</div>
            <div className="dataOther">DOB: {this.props.patient.get('dob')}</div>
          </div>
        </div>
      </div>
    );
  }
}
