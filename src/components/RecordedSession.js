import React from 'react';

export default class RecordedSession extends React.Component {
  static propTypes = {};

  componentDidUpdate(prevProps, prevState) {
    console.log('DidUpdate');
  }

  componentDidMount() {
    console.log('DidMount');
    console.log(this.refs.panel);
    const boundRect = this.refs.panel.getBoundingClientRect();

    this.refs.panel.style.height = this.refs.panel.parentElement.offsetHeight - boundRect.top;
  }

  render() {
    return (
      <div className="RecordedSession" ref="panel">
        <div className="card">
          <div className="row">
            <div className="col-sm-12">
              <div className="sessionName">Today February, 28th, 2016</div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
