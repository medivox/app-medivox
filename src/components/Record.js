import React from 'react';
import PatientData from './PatientData';
import RecordedSession from './RecordedSession';
import Timeline from './Timeline';

export default class Record extends React.Component {
  static propTypes = {};

  render() {
    return (
      <div className="Record">
        <div className="content">
          <PatientData />
          <RecordedSession />

        </div>
      </div>
    );
  }
}
