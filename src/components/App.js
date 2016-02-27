import React from 'react';
import { connect } from 'react-redux';
import * as BaseActions from '../actions/base';
import Button from './Button';

import './App.scss';

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
        <div className="page-header">
          <h1>React-Redux-Webpack Template</h1>
        </div>
        <p className="lead">A simple starting template to create simple Single Page Apps.</p>
        <p>Have fun coding... <i className="fa fa-thumbs-o-up"/></p>
        <Button
          value={state.get('value')}
          plusOne={this.plusOne}
          minusOne={this.minusOne}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state: state.base };
}

export default connect(mapStateToProps)(App);
