import React from 'react';
import { connect } from 'react-redux';
import * as BaseActions from '../actions/base';
import Record from './Record';
import Session from './Session';

class App extends React.Component {
  static propTypes = {
    state: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.state.get('patientId') !== this.props.state.get('patientId')) {
      this.props.dispatch(BaseActions.getPatient(this.props.state.get('patientId')));
    }

    if (this.props.state.get('patientToSave')) {
      if (!this.props.state.get('savingPatient')) {
        this.props.dispatch(BaseActions.savingPatient());
        this.props.dispatch(BaseActions.savePatient(this.props.state.get('patientToSave')));

      }
    }
    //patientToSave,
    //'savingPatient': false'))
  }

  render() {
    const { state } = this.props;

    return (
      <div className="App">
        <div className="col-md-6">
          {(this.props.state.get('patient')) ?
            <Record patient={this.props.state.get('patient')} dispatch={this.props.dispatch}/>
            :
            null
          }
        </div>
        <div className="col-md-6">
          <Session dispatch={this.props.dispatch} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state: state.base };
}

export default connect(mapStateToProps)(App);
