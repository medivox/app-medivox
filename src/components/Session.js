import React from 'react';
import Microphone from './Microphone';

export default class Session extends React.Component {
  static propTypes = {

  };

  state = {
    final_transcript: '',
    recognizing: false,
    ignore_onend: true,
    interim_transcript: ''
  };

  componentDidMount() {
    var recognition = new webkitSpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      console.log('recognition.onStart');
    };

    recognition.onend = () => {
      console.log('recognition.onEnd');
      this.setState({recognizing: false});
    };

    recognition.onresult = (event) => {
      let interim_transcript = '';
      let final_transcript;

      for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          final_transcript = event.results[i][0].transcript;
        } else {
          interim_transcript += event.results[i][0].transcript;
        }
      }
      const recognizing = !final_transcript;
      this.setState({final_transcript,interim_transcript,recognizing});
    };

    recognition.start();
  }

  render() {
    return (
      <div className="Session">
        <div className="content">

          <Microphone recording={this.state.recognizing}/>

        </div>
      </div>
    );
  }
}
