import React from 'react';
import R from 'ramda';

export default class LabsDataSegment extends React.Component {
  static propTypes = {
    icon: React.PropTypes.string,
    sectionName: React.PropTypes.string,
    data: React.PropTypes.object
  };

  render() {
    let
      rows = [];

    for (let i = 0, l = this.props.data.size; i < l; i += 1) {
      const dataRow = this.props.data.get(i);
      const test = dataRow.get(0);

      rows.push(
        <div className="dataRow row" key={i}>
          <div className="col-sm-12">
            {test}
          </div>
        </div>
      );
    }

    return (
      <div className="DataSegment">
        <div className="row">
          <div className="col-sm-12">
            <div className="title">
              <i className={'fa ' + this.props.icon} />
              {this.props.sectionName}
            </div>
            <div className="data">
              {rows}
            </div>
          </div>
        </div>
      </div>

    );
  }
}
