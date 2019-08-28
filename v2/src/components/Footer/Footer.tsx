import React, { Component } from 'react';

import './Footer.scss';

export default class Footer extends Component {

  public render(): JSX.Element {
    return (
      <div className="Footer">
        <footer className="text-center">
          <div className="footer-above">
            <div className="container">
              <div className="row">
                <div className="footer-col col-md-6">
                  <h3><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp; LOCATION</h3>
                  <p className="custom-small-location-content">TDSM, Pulong Buhangin, Sta. Maria, Bulacan, Philippines.</p>
                </div>
                <div className="footer-col col-md-6">
                  <h3><i className="fa fa-share-square-o" aria-hidden="true"></i>&nbsp; LOOK FOR ME IN THE WEB</h3>
                  <ul className="list-inline">
                    <li><a target="_blank" href="https://github.com/LordDashMe" className="btn-social btn-outline" rel="noopener noreferrer"><i className="fa fa-fw fa-github"></i></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/joshua-clifford-reyes-5572b912a/" className="btn-social btn-outline" rel="noopener noreferrer"><i className="fa fa-fw fa-linkedin"></i></a></li>
                    <li><a target="_blank" href="https://www.facebook.com/LordDash.Me" className="btn-social btn-outline" rel="noopener noreferrer"><i className="fa fa-fw fa-facebook"></i></a></li>
                    <li><a target="_blank" href="https://twitter.com/lorddashme?lang=en" className="btn-social btn-outline" rel="noopener noreferrer"><i className="fa fa-fw fa-twitter"></i></a></li>
                    <li><a target="_blank" href="https://instagram.com/lorddashme/" className="btn-social btn-outline" rel="noopener noreferrer"><i className="fa fa-fw fa-instagram"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-below">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <p>&copy; 2019 <a href="/" rel="noopener noreferrer">LordDashMe</a></p>
                  <p><small>Powered by React and Github Pages</small></p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
