import React from 'react';
import R from 'ramda';

const BIOMETRICS = {
  'patient.biometric.height': 'Height',
  'patient.biometric.weight': 'Weight',
  'patient.biometric.bloodpressure': 'Blood Pressure',
  'patient.biometric.birthdate': 'DOB',
  'patient.biometric.pulse': 'Heart Rate',
  'patient.biometric.temperature': 'Body Temp',
  'patient.biometric.gender': 'Gender'
};

const BIOMETRICS_UNIT = {
  'patient.biometric.height': 'feet',
  'patient.biometric.weight': 'lbs',
  'patient.biometric.bloodpressure': 'sis/dias',
  'patient.biometric.birthdate': '',
  'patient.biometric.pulse': 'bpm',
  'patient.biometric.temperature': 'F',
  'patient.biometric.gender': ''
};


function convertType(s) {
  return BIOMETRICS[s] || '';
}

function convertTypeUnit(s) {
  return BIOMETRICS_UNIT[s] || '';
}

export default class DataSegment extends React.Component {
  static propTypes = {
    icon: React.PropTypes.string,
    sectionName: React.PropTypes.string,
    data: React.PropTypes.object
  };

  render() {
    let
      rows = [];

    for (let i = 0, l = this.props.data.size; i < l; i += 1) {
      const dataRow = this.props.data.get(i);
      const type = dataRow.get(0);
      const typeData = dataRow.get(1).toJS();

      const typeDataBadges = R.compose(R.join(' / '),R.values)(typeData);

      rows.push(
        <div className="dataRow row" key={i}>
          <div className="col-sm-6">
            {convertType(type)}
          </div>
          <div className="col-sm-6">
            <b>{typeDataBadges}</b>
            <span className="unit">{convertTypeUnit(type)}</span>
          </div>
        </div>
      );
    }

    return (
      <div className="DataSegment">
        <div className="row">
          <div className="col-sm-12">
            <div className="title">
              <i className={'fa ' + this.props.icon} />
              {this.props.sectionName}
            </div>
            <div className="data">
              {rows}
            </div>
          </div>
        </div>
      </div>

    );
  }
}
