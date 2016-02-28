import React from 'react';
import PatientData from './PatientData';
import RecordedSession from './RecordedSession';
import Timeline from './Timeline';

export default class Record extends React.Component {
  static propTypes = {
    patient: React.PropTypes.object
  };

  render() {
    return (
      <div className="Record">
        <div className="content">
          <PatientData patient={this.props.patient} />
          <RecordedSession patient={this.props.patient} />

        </div>
      </div>
    );
  }
}
