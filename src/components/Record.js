import React from 'react';
import PatientData from './PatientData';

export default class Record extends React.Component {
  static propTypes = {};

  render() {
    return (
      <div className="Record">
        <div className="content">
          <PatientData />
        </div>
      </div>
    );
  }
}
