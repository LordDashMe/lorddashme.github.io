import React, { Component } from 'react';

import './CareerHistory.scss';

interface IProperty {}

interface IState {
  careerHistoryDetails: Array<IOrganization>;
}

interface IOrganization {
  id: string;
  logo: string;
  logoStyle: object;
  name: string;
  roles: Array<IRole>;
}

interface IRole {
  id: string;
  name: string;
  term: string;
  highlights: Array<IHighLight>;
}

interface IHighLight {
  id: string;
  name: string;
  logo: string;
  descriptions: Array<string>;
}

export default class CareerHistory extends Component<IProperty, IState> {

  public constructor(properties: any) {
    super(properties);
    this.state = {
      careerHistoryDetails: [
        {
          id: 'nmi',
          logo: 'resources/img/companies/gma-nmi-logo.png',
          logoStyle: {
            width: '128px',
            maxWidth: '26%'
          },
          name: 'GMA New Media Inc. (NMI)',
          roles: [
            {
              id: 'senior_web_developer',
              name: 'Senior Web Developer',
              term: 'January 2019 - Present',
              highlights: [
                {
                  id: 'web_development',
                  name: 'Web Development',
                  logo: 'fas fa-certificate',
                  descriptions: []
                },
                {
                  id: 'gma_news_online_eleksyon_2019_microsite',
                  name: 'GMA News Online - Eleksyon 2019 Microsite',
                  logo: 'fas fa-certificate',
                  descriptions: []
                }
              ]
            }
          ]
        },
        {
          id: 'nw',
          logo: 'resources/img/companies/logo-nuworks.png',
          logoStyle: {},
          name: 'NuWorks Interactive Labs, Inc. (NuWorks)',
          roles: []
        },
        {
          id: 'gs3',
          logo: 'resources/img/companies/gs3_logo.svg',
          logoStyle: {},
          name: 'Global Strategic Solutions and Services, Inc. (GS3)',
          roles: []
        },
        {
          id: 'sti',
          logo: 'resources/img/companies/STI300.png',
          logoStyle: {
            width: '100px',
            maxWidth: '25%',
            marginRight: '5px' 
          },
          name: 'STI College of Santa Maria Bulacan',
          roles: [
            {
              id: 'bsit',
              name: 'Bachelor of Science in Information Technology',
              term: '2011 - 2015',
              highlights: [
                {
                  id: 'cumlaude',
                  name: 'Cum Laude',
                  logo: 'fas fa-trophy',
                  descriptions: []
                },
                {
                  id: 'best_programmer_of_the_year',
                  name: 'Best Programmer of the Year (Batch 2015)',
                  logo: 'fas fa-medal',
                  descriptions: []
                },
                {
                  id: 'best_in_thesis',
                  name: 'Best in Thesis',
                  logo: 'fas fa-medal',
                  descriptions: [
                    'Team Leader and Main Programmer',
                    'Map Locator (Android Application)'
                  ]
                },
                {
                  id: '1st_runnerup_in_app_and_running_mobile_development',
                  name: '1st Runner-up in App and Running (Mobile Development)',
                  logo: 'fas fa-star',
                  descriptions: [
                    'STI Tagisan ng Talino (Dagupan Cluster Level | February 2015)'
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  }

  private getCareerHistoryDetails(): JSX.Element[] {
    return this.state.careerHistoryDetails.map(organization => {
      return (
        <div key={organization.id} className="ch-organization">
          <span>
            <img className="ch-org-logo" src={organization.logo} alt="STI" style={organization.logoStyle}/>
            <h2 className="ch-org-name">{organization.name}</h2>
          </span>
          {
            organization.roles.map(role => {
              return (
                <div key={role.id} className="ch-position-wrapper">
                  <div className="ch-position">
                    <h3 className="ch-role">{role.name}</h3>
                    <p className="ch-role-term"><i className="far fa-calendar-alt" aria-hidden="true"></i> <small>{role.term}</small></p>
                  </div>
                  <div className="ch-highlight-details">
                    {
                      role.highlights.map(highlight => {
                        return (
                          <div key={highlight.id} className="ch-highlight-wrapper">
                            <span className="ch-highlight-span">
                              <i className={highlight.logo} aria-hidden="true"></i>
                              <p className="ch-highlight">{highlight.name}</p>
                            </span>
                            {
                              highlight.descriptions.map((description, index) => {
                                return (
                                  <div className="ch-highlight-desc">
                                    <span className="ch-highlight-specific-span">
                                      <i className="fas fa-angle-right" aria-hidden="true"></i>
                                      <p key={index} className="ch-highlight-specific">{description}</p>
                                    </span>
                                  </div>
                                );
                              })
                            }
                          </div>  
                        );
                      })
                    }
                  </div>
                </div>
              );
            })
          }
        </div>
      );
    });
  }

  public render(): JSX.Element {
    return (
      <div className="CareerHistory">
        {this.getCareerHistoryDetails()}
      </div>
    );
  }
}
