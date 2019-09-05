import React, { Component } from 'react';

import './CareerHistory.scss';

export default class CareerHistory extends Component {

  public render(): JSX.Element {
    return (
      <div className="CareerHistory">
        <div className="ch-organization">
          <img className="ch-org-logo" src="resources/img/companies/STI300.png" alt="STI"/>
          <h2 className="ch-org-name">STI College of Santa Maria Bulacan</h2>
          <div className="ch-position">
            <h3 className="ch-role">Bachelor of Science in Information Technology</h3>
            <p className="ch-role-term"><i className="far fa-calendar-alt" aria-hidden="true"></i> <small>2011 - 2015</small></p>
          </div>
          <div className="ch-organization-details">
            <p className="ch-highlight"><i className="fas fa-trophy" aria-hidden="true"></i> Cum Laude</p>
            <p className="ch-highlight"><i className="fas fa-medal" aria-hidden="true"></i> Best Programmer of the Year (Batch 2015)</p>
            <p className="ch-highlight"><i className="fas fa-medal" aria-hidden="true"></i> Best in Thesis</p>
          </div>
        </div>
      </div>
    );
  }
}
