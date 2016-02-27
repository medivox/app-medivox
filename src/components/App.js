import React from 'react';
import { connect } from 'react-redux';
import * as BaseActions from '../actions/base';
import Record from './Record';
import Session from './Session';

class App extends React.Component {
  static propTypes = {
    state: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired,
    secondRender: React.PropTypes.bool
  };

  constructor(props, context) {
    super(props, context);
  }

  plusOne = () => this.props.dispatch(BaseActions.plusOne());
  minusOne = () => this.props.dispatch(BaseActions.minusOne());

  render() {
    const { state } = this.props;

    return (
      <div className="App">
        <div className="col-md-6">
          <Record />
        </div>
        <div className="col-md-6">
          <Session />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state: state.base };
}

export default connect(mapStateToProps)(App);
