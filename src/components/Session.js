import React from 'react';

export default class Session extends React.Component {
  static propTypes = {};

  render() {
    return (
      <div className="Session">
        <div className="content">
          <img src="dist/img/microphone.png" className="microphone"/>
          <img src="dist/img/oval-active.png" className="oval-active"/>
        </div>
      </div>
    );
  }
}
