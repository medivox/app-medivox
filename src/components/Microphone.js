import React from 'react';
import classNames from 'classnames';

function format(s) {
  return capitalize(s);
}

function capitalize(s) {
  return s.replace(/\S/, function (m) {
    return m.toUpperCase();
  });
}

export default class Microphone extends React.Component {
  static propTypes = {
    recording: React.PropTypes.bool.isRequired,
    lastPhrase: React.PropTypes.string.isRequired,
    restartMicrophone: React.PropTypes.func.isRequired
  };

  state = {
    small: true
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.recording != nextProps.recording) {
      if (nextProps.recording) {
        this.intervalId = setInterval(this.changeState, 300);
      } else {
        if (this.intervalId) {
          clearInterval(this.intervalId);
        }
      }
    }
  }

  changeState = () => {
    this.setState({small: !this.state.small});
  };

  restartListening = () => {
    this.props.restartMicrophone();
  };

  render() {
    return (
      <div className="Microphone">
        <div className="phrasePanel">
          {this.props.lastPhrase}
        </div>
        <div className="microphonePanel">
          <img src="dist/img/microphone.png" className="microphone" onClick={this.restartListening}/>
        </div>
        <div className="oval-activePanel">
          <img src="dist/img/oval-active.png" className={classNames("oval-active",{'bigger': !this.state.small}, {'smaller': this.state.small})}/>
        </div>
      </div>
    );
  }
}
