import React from 'react'

import TopbarNav from './topbar_nav';


export default class extends React.Component {

  render() {
    let topbarRowStyle = {
      marginBottom: "30px"
    };
    const {content} = this.props;

    return (
      <div className="ui grid">
        <div className="row" style={topbarRowStyle}>
          <div className="column">
            <TopbarNav />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div id="main_layout" className="ui container">

              {content()}

            </div>
          </div>
        </div>
      </div>
    );
  }
}
