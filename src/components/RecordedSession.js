import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import SessionData from './SessionData';

export default class RecordedSession extends React.Component {
  static propTypes = {
    patient: React.PropTypes.object
  };

  componentDidMount() {
    const boundRect = this.refs.panel.getBoundingClientRect();
    this.refs.panel.style.height = this.refs.panel.parentElement.offsetHeight - boundRect.top;
  }

  render() {

    let
      tabs = [],
      panels = [];


    for (let i = 0, l = this.props.patient.get('sessions').size; i < l; i += 1) {
      const session = this.props.patient.get('sessions').get(i);
      const last = (i === l - 1);

      const id = `tab-${session.get('date')}`;

      tabs.push(
        <li key={id} role="presentation" className={classNames({'active': last})}>
          <a href={`#${id}`} role="tab" data-toggle="tab">
            {(last) ? 'Hoy' : i + 1}
          </a>
        </li>
      );

      panels.push(
        <div key={id} role="tabpanel" className={classNames('tab-pane', {'active': last})} id={id}>
          <SessionData session={session}/>
        </div>
      );
    }

    return (
      <div className="RecordedSession" ref="panel">
        <div className="card">
          <div className="row">
            <div className="col-sm-12">
              <ul className="nav nav-pills">
                {tabs}
              </ul>

              <div className="tab-content">
                {panels}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
