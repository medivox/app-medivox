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
    recording: React.PropTypes.bool.isRequired
  };

  state = {
    small: true
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.recording != nextProps.recording) {
      if (nextProps.recording) {
        this.intervalId = setInterval(this.changeState, 300);
        this.intervalId2 = setInterval(this.changeState, 100);
      } else {
        if (this.intervalId) {
          clearInterval(this.intervalId);
        }
        if (this.intervalId2) {
          clearInterval(this.intervalId2);
        }

      }
    }
  }

  changeState = () => {
    this.setState({small: !this.state.small});
  };

  render() {
    return (
      <div className="Microphone">
        <div className="microphonePanel">
          <img src="dist/img/microphone.png" className="microphone"/>
        </div>
        <div className="oval-activePanel">
          <img src="dist/img/oval-active.png" className={classNames("oval-active",{'bigger': !this.state.small}, {'smaller': this.state.small})}/>
        </div>
      </div>
    );
  }
}
