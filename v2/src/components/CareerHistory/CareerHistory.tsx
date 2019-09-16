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
                },
                {
                  id: 'code-page-library',
                  name: 'Code Package | Library',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'NodeJS Image Squeezer'
                  ]
                },
                {
                  id: 'amazon-web-services',
                  name: 'Amazon Web Services',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'Simple Storage Service (S3)'
                  ]
                },
                {
                  id: 'php',
                  name: 'PHP',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'CodeIgniter'
                  ]
                },
                {
                  id: 'javascript',
                  name: 'JavaScript',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'NodeJS',
                    'Angular',
                    'RxJS',
                    'TypeScript',
                    'React'
                  ]
                },
                {
                  id: 'python',
                  name: 'Python',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'Falcon'
                  ]
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
          roles: [
            {
              id: 'backend-developer-and-devops',
              name: 'Back End Developer and DevOps',
              term: 'December 2017 - January 2019',
              highlights: [
                {
                  id: 'neuland-ph-website',
                  name: 'Neuland PH Website',
                  logo: 'fas fa-certificate',
                  descriptions: []
                },
                {
                  id: 'decidium-ph-website',
                  name: 'Decidium PH Website',
                  logo: 'fas fa-certificate',
                  descriptions: []
                },
                {
                  id: 'monde-nissin-website',
                  name: 'Monde Nissin Website (Maintenance)',
                  logo: 'fas fa-certificate',
                  descriptions: []
                },
                {
                  id: 'marlboro-website',
                  name: 'Marlboro Website (Maintenance)',
                  logo: 'fas fa-certificate',
                  descriptions: []
                },
                {
                  id: 'nuworks-website',
                  name: 'NuWorks Website (Maintenance)',
                  logo: 'fas fa-certificate',
                  descriptions: []
                },
                {
                  id: 'belo-men-website',
                  name: 'Belo Men Website (Maintenance)',
                  logo: 'fas fa-certificate',
                  descriptions: []
                },
                {
                  id: 'code-page-library',
                  name: 'Code Package | Library',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'Wordpress Scaffolding',
                    'PHP Simple Captcha',
                    'Wordpress DB Schema Extender',
                    'PHP Static Class Interface',
                    'PHP MailChimp'
                  ]
                },
                {
                  id: 'continuous-integration',
                  name: 'Continuous Integration',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'Jenkins',
                    'TravisCI',
                    'Bitbucket Pipelines'
                  ]
                },
                {
                  id: 'test-coverage',
                  name: 'Test Coverage',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'Coveralls',
                    'Code Climate',
                    'CodeCov'
                  ]
                },
                {
                  id: 'os-virtualization',
                  name: 'OS Virtualization',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'Docker'
                  ]
                },
                {
                  id: 'server',
                  name: 'Server',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'Linux'
                  ]
                },
                {
                  id: 'web-server',
                  name: 'Web Server',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'Apache',
                    'Nginx'
                  ]
                },
                {
                  id: 'server-security',
                  name: 'Server Security',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'Web Server and Application Security Standards'
                  ]
                },
                {
                  id: 'guest-speaker',
                  name: 'Guest Speaker',
                  logo: 'fas fa-microphone-alt',
                  descriptions: [
                    '"Composer Basic - Autoloading" (NWTalks Meetup | May 11, 2018)',
                    '"Hardening Wordpress Security" (Coding Girl\'s Manila Meetup | January 26, 2018)'
                  ]
                },
                {
                  id: 'meetup-conference-attended',
                  name: 'Meetup | Conference Attended',
                  logo: 'fas fa-users',
                  descriptions: [
                    'Laravel PH Meetup (September 20, 2018',
                    'Wordpress - Wordcamp Manila 2018 (September 8, 2018)'
                  ]
                }
              ]
            },
            {
              id: 'backend-developer',
              name: 'Back End Developer',
              term: 'January 2017 - December 2017',
              highlights: [
                {
                  id: 'creamsilk-ph-website',
                  name: 'Creamsilk PH Website',
                  logo: 'fas fa-certificate',
                  descriptions: []
                },
                {
                  id: 'imagenation-canon-ph-website',
                  name: 'Imagenation Canon PH Website (Maintenance)',
                  logo: 'fas fa-certificate',
                  descriptions: []
                },
                {
                  id: 'chevrolet-ph-website',
                  name: 'Chevrolet PH Website',
                  logo: 'fas fa-certificate',
                  descriptions: []
                },
                {
                  id: 'nestle-nestea-beach-2017-ph-microsite',
                  name: 'Nestle Nestea Beach 2017 PH Microsite',
                  logo: 'fas fa-certificate',
                  descriptions: []
                },
                {
                  id: 'php',
                  name: 'PHP',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'Laravel',
                    'Drupal',
                    'CodeIgniter',
                    'Wordpress'
                  ]
                },
                {
                  id: 'meetup-conference-attended',
                  name: 'Meetup | Conference Attended',
                  logo: 'fas fa-users',
                  descriptions: [
                    'Laravel PH Meetup (July 28, 2017)',
                    'Manila Javascript Meetup (June 21, 2017)',
                    'Royale Rumble DevCon Meetup (January 26, 2017)'
                  ]
                },
                {
                  id: 'training',
                  name: 'Training',
                  logo: 'fas fa-book',
                  descriptions: [
                    'Laravel Training (Inventive Media | March 24 - 27, 2017)'
                  ]
                }
              ] 
            }
          ]
        },
        {
          id: 'gs3',
          logo: 'resources/img/companies/gs3_logo.svg',
          logoStyle: {},
          name: 'Global Strategic Solutions and Services, Inc. (GS3)',
          roles: [
            {
              id: 'web-and-mobile-developer',
              name: 'Web and Mobile Developer',
              term: 'June 2016 - January 2017',
              highlights: [
                {
                  id: 'forma-eforms-mobile-application',
                  name: 'Formalistics Mobile Application',
                  logo: 'fas fa-certificate',
                  descriptions: []
                },
                {
                  id: 'forma-eforms-web-application',
                  name: 'Formalistics Web Application',
                  logo: 'fas fa-certificate',
                  descriptions: [
                    'Contribute to the source code of the Custom Framework used by the company'
                  ]
                },
                {
                  id: 'mobile-hybrid-framework',
                  name: 'Mobile Hybrid Framework',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'Ionic'
                  ]
                },
                {
                  id: 'custom-compiler',
                  name: 'Custom Compiler',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'Built on top of PHP and used by the Formalistics form builder for formula syntax.'
                  ]
                },
                {
                  id: 'rest-api-implementation',
                  name: 'REST API Implementation',
                  logo: 'far fa-lightbulb',
                  descriptions: []
                },
                {
                  id: 'google-map-api-integration',
                  name: 'Google Map API Integration',
                  logo: 'far fa-lightbulb',
                  descriptions: []
                },
                {
                  id: 'meetup-conference-attended',
                  name: 'Meetup | Conference Attended',
                  logo: 'fas fa-users',
                  descriptions: [
                    'PHP Conference 2016 Philippines (October 13 - 14, 2016)'
                  ]
                }
              ]
            },
            {
              id: 'web-developer',
              name: 'Web Developer',
              term: 'April 2015 - June 2016',
              highlights: [
                {
                  id: 'forma-eforms-web-application',
                  name: 'Formalistics Web Application',
                  logo: 'fas fa-certificate',
                  descriptions: []
                },
                {
                  id: 'server',
                  name: 'Server',
                  logo: 'far fa-lightbulb',
                  descriptions: [
                    'Windows'
                  ]
                },
                {
                  id: 'php',
                  name: 'PHP',
                  logo: 'far fa-lightbulb',
                  descriptions: []
                },
                {
                  id: 'javascript',
                  name: 'JavaScript',
                  logo: 'far fa-lightbulb',
                  descriptions: []
                },
                {
                  id: 'technical-support',
                  name: 'Technical Support',
                  logo: 'fas fa-wrench',
                  descriptions: []
                }
              ]
            }
          ]
        },
        {
          id: 'sti',
          logo: 'resources/img/companies/STI300-min.png',
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
                                  <div key={index} className="ch-highlight-desc">
                                    <span className="ch-highlight-specific-span">
                                      <i className="fas fa-angle-right" aria-hidden="true"></i>
                                      <p className="ch-highlight-specific">{description}</p>
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
