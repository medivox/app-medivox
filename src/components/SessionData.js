import React from 'react';
import DataSegment from './DataSegment';
import SymptomsDataSegment from './SymptomsDataSegment';
import PrescriptionDataSegment from './PrescriptionDataSegment';
import LabsDataSegment from './LabsDataSegment';
import AppointmentsDataSegment from './AppointmentsDataSegment';

export default class SessionData extends React.Component {
  static propTypes = {
    session: React.PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="SessionData">
        {(this.props.session.get('biometrics')) ?
          <DataSegment sectionName="Biometrics" icon="fa-heartbeat" data={this.props.session.get('biometrics')}/>
          :
          null
        }

        {(this.props.session.get('symptoms')) ?
          <SymptomsDataSegment sectionName="Symptoms" icon="fa-stethoscope" data={this.props.session.get('symptoms')}/>
          :
          null
        }

        {(this.props.session.get('prescriptions')) ?
          <PrescriptionDataSegment sectionName="Prescriptions" icon="fa-medkit" data={this.props.session.get('prescriptions')}/>
          :
          null
        }

        {(this.props.session.get('labs')) ?
          <LabsDataSegment sectionName="Labs" icon="fa-tint" data={this.props.session.get('labs')}/>
          :
          null
        }

        {(this.props.session.get('appointments')) ?
          <AppointmentsDataSegment sectionName="Appointments" icon="fa-calendar" data={this.props.session.get('appointments')}/>
          :
          null
        }


      </div>
    );
  }
}
