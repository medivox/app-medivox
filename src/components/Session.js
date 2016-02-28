import React from 'react';
import Microphone from './Microphone';
import * as BaseActions from '../actions/base';

export default class Session extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func.isRequired
  };

  state = {
    recognizing: false,
    lastPhrase: ''
  };

  startVoiceCommands = () => {
    if (annyang) {
      annyang.start({ autoRestart: true, continuous: true });
      annyang.setLanguage('en-US');
      annyang.addCallback('result', (e) => {
        if (e) {
          this.setState({transcript: e, lastPhrase: e[0]});
          this.props.dispatch(BaseActions.getIntent(e[0]));
        }
      });
      annyang.addCallback('start', (e) => {
        console.log('Started mic');
      });
      annyang.addCallback('end', (e) => {
        console.log('Ended mic');
      });
      annyang.addCallback('start', () => {
        this.setState({recognizing: true});
      });
    }
  };

  componentDidMount() {
    this.startVoiceCommands();
  }

  restartMicrophone = (e) => {
    console.log('Aborting voice, restarting it');
    annyang.abort();
    this.startVoiceCommands();
    e.preventDefault();
  };

  render() {
    return (
      <div className="Session">
        <div className="content">

          <Microphone
            recording={this.state.recognizing}
            lastPhrase={this.state.lastPhrase}
            restartMicrophone={this.restartMicrophone}/>
          <div className="logo">
            <img src="dist/img/medivox-logo.png" />
          </div>
        </div>
      </div>
    );
  }
}
