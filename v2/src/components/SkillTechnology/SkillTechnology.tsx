import React, { Component } from 'react';

import './SkillTechnology.scss';

export default class SkillTechnology extends Component {

  public render(): JSX.Element {
    return (
      <div className="SkillTechnology">
        <div className="skill-technology-details">
          <h2 className="skill-technology-role-title"><i className="fas fa-globe-americas" aria-hidden="true"></i> WEB DEVELOPMENT</h2>
          <div className="skill-technology-tool">
            <h3 className="skill-technology-brand"><i className="fab fa-php" aria-hidden="true"></i> PHP</h3>
            <p className="skill-technology-library"><i className="fa fa-angle-right" aria-hidden="true"></i> Symfony</p>
            <p className="skill-technology-library"><i className="fa fa-angle-right" aria-hidden="true"></i> Wordpress</p>
            <p className="skill-technology-library inactive"><i className="fa fa-angle-right" aria-hidden="true"></i> Laravel</p>
            <p className="skill-technology-library inactive"><i className="fa fa-angle-right" aria-hidden="true"></i> Drupal</p>
            <p className="skill-technology-library"><i className="fa fa-angle-right" aria-hidden="true"></i> CodeIgniter</p>
            <p className="skill-technology-library"><i className="fa fa-angle-right" aria-hidden="true"></i> PHPUnit</p>
          </div>
          <div className="skill-technology-tool">
            <h3 className="skill-technology-brand"><i className="fab fa-python" aria-hidden="true"></i> Python</h3>
            <p className="skill-technology-library"><i className="fa fa-angle-right" aria-hidden="true"></i> Falcon</p>
          </div>
          <div className="skill-technology-tool">
            <h3 className="skill-technology-brand"><i className="fab fa-js" aria-hidden="true"></i> JavaScript</h3>
            <p className="skill-technology-library"><i className="fa fa-angle-right" aria-hidden="true"></i> JQuery</p>
            <p className="skill-technology-library"><i className="fa fa-angle-right" aria-hidden="true"></i> NodeJS</p>
            <p className="skill-technology-library"><i className="fa fa-angle-right" aria-hidden="true"></i> React</p>
            <p className="skill-technology-library inactive"><i className="fa fa-angle-right" aria-hidden="true"></i> AngularJS</p>
            <p className="skill-technology-library"><i className="fa fa-angle-right" aria-hidden="true"></i> Jest</p>
            <p className="skill-technology-library"><i className="fa fa-angle-right" aria-hidden="true"></i> Angular</p>
            <p className="skill-technology-library"><i className="fa fa-angle-right" aria-hidden="true"></i> RxJS</p>
            <p className="skill-technology-library"><i className="fa fa-angle-right" aria-hidden="true"></i> TypeScript</p>
          </div>
          <div className="skill-technology-tool">
            <h3 className="skill-technology-brand"><i className="fa fa-database" aria-hidden="true"></i> SQL</h3>
            <p className="skill-technology-library"><i className="fa fa-angle-right" aria-hidden="true"></i> MySQL</p>
            <p className="skill-technology-library inactive"><i className="fa fa-angle-right" aria-hidden="true"></i> SQLite</p>
            <p className="skill-technology-library inactive"><i className="fa fa-angle-right" aria-hidden="true"></i> MsSQL</p>
            <p className="skill-technology-library inactive"><i className="fa fa-angle-right" aria-hidden="true"></i> PostgreSQL</p>
          </div>
        </div>
        <h2 className="skill-technology-role-title"><i className="fa fa-mobile" aria-hidden="true"></i> MOBILE APP DEVELOPMENT</h2>
        <h2 className="skill-technology-role-title"><i className="fa fa-desktop" aria-hidden="true"></i> DESKTOP APP DEVELOPMENT</h2>
        <h2 className="skill-technology-role-title"><i className="fa fa-server" aria-hidden="true"></i> DEVOPS</h2>
        <h2 className="skill-technology-role-title"><i className="fa fa-wifi" aria-hidden="true"></i> COMPUTER NETWORKING</h2>
      </div>
    );
  }
}
