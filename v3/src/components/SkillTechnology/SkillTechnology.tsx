import React, { Component } from 'react';

import style from './SkillTechnology.module.scss';

interface IProperty {}

interface IState {
  skillTechnologyDetails: IRole[];
}

interface IRole {
  id: string;
  role: string;
  icon: string;
  tools: ITool[];
}

interface ITool {
  id: string;
  name: string;
  icon: string;
  libraries: ILibrary[];
  isActive: boolean;
}

interface ILibrary {
  id: string;
  name: string;
  isActive: boolean;
}

export default class SkillTechnology extends Component<IProperty, IState> {

  public constructor(properties: any) {

    super(properties);
    
    this.state = {
      skillTechnologyDetails: [
        {
          id: 'web_development',
          role: 'WEB DEVELOPMENT',
          icon: 'fas fa-globe-americas',
          tools: [
            {
              id: 'php',
              name: 'PHP',
              icon: 'fab fa-php',
              libraries: [
                { id: 'symfony', name: 'Symfony', isActive: true },
                { id: 'wordpress', name: 'Wordpress', isActive: true },
                { id: 'laravel', name: 'Laravel', isActive: true },
                { id: 'drupal', name: 'Drupal', isActive: false },
                { id: 'codeigniter', name: 'CodeIgniter', isActive: true },
                { id: 'phpunit', name: 'PHPUnit', isActive: true }
              ],
              isActive: true
            },
            {
              id: 'python', 
              name: 'Python',
              icon: 'fab fa-python',
              libraries: [
                { id: 'falcon',  name: 'Falcon', isActive: true },
                { id: 'pytest',  name: 'PyTest', isActive: true }
              ],
              isActive: true
            },
            {
              id: 'javascript', 
              name: 'JavaScript',
              icon: 'fab fa-js',
              libraries: [
                { id: 'nodejs', name: 'NodeJS', isActive: true },
                { id: 'jquery', name: 'JQuery', isActive: true },
                { id: 'angularjs', name: 'AngularJS', isActive: false },
                { id: 'jest', name: 'Jest', isActive: true },
                { id: 'typescript', name: 'TypeScript', isActive: true },
                { id: 'react', name: 'React', isActive: true },
                { id: 'angular', name: 'Angular', isActive: false },
                { id: 'rxjs', name: 'RxJS', isActive: false }
              ],
              isActive: true
            },
            {
              id: 'sql', 
              name: 'SQL',
              icon: 'fas fa-database',
              libraries: [
                { id: 'mysql', name: 'MySQL', isActive: true },
                { id: 'sqlite', name: 'SQLite', isActive: false },
                { id: 'mssql', name: 'MsSQL', isActive: false },
                { id: 'postgresql', name: 'PostgreSQL', isActive: false }
              ],
              isActive: true
            },
            {
              id: 'nosql', 
              name: 'NoSQL',
              icon: 'fas fa-database',
              libraries: [
                { id: 'mongodb', name: 'MongoDB', isActive: true }
              ],
              isActive: true
            },
            {
              id: 'html', 
              name: 'HTML',
              icon: 'fab fa-html5',
              libraries: [
                { id: 'markdown', name: 'Markdown', isActive: true }
              ],
              isActive: true
            },
            {
              id: 'css', 
              name: 'CSS',
              icon: 'fab fa-css3',
              libraries: [
                { id: 'sass', name: 'Sass', isActive: true }
              ],
              isActive: true
            }
          ]
        },
        {
          id: 'mobile_app_development',
          role: 'MOBILE APP DEVELOPMENT',
          icon: 'fas fa-mobile-alt',
          tools: [
            {
              id: 'ionic', 
              name: 'Ionic',
              icon: 'fas fa-cloud',
              libraries: [],
              isActive: false
            },
            {
              id: 'android', 
              name: 'Android',
              icon: 'fab fa-android',
              libraries: [
                { id: 'java', name: 'Java', isActive: false }
              ],
              isActive: false
            }
          ]
        },
        {
          id: 'desktop_app_development',
          role: 'DESKTOP APP DEVELOPMENT',
          icon: 'fas fa-desktop',
          tools: [ 
            {
              id: 'java_se', 
              name: 'Java SE',
              icon: 'fab fa-java',
              libraries: [
                { id: 'swing', name: 'Swing', isActive: false },
              ],
              isActive: false
            }
          ]
        },
        {
          id: 'devops',
          role: 'DEVOPS',
          icon: 'fas fa-server',
          tools: [
            {
              id: 'docker', 
              name: 'Docker',
              icon: 'fab fa-docker',
              libraries: [
                { id: 'docker_compose', name: 'Docker Compose', isActive: true },
              ],
              isActive: true
            },
            {
              id: 'linux_server', 
              name: 'Linux Server',
              icon: 'fab fa-linux',
              libraries: [],
              isActive: true
            },
            {
              id: 'windows_server', 
              name: 'Windows Server',
              icon: 'fab fa-windows',
              libraries: [],
              isActive: false
            },
            {
              id: 'web_servers', 
              name: 'Web Servers',
              icon: 'fas fa-cubes',
              libraries: [
                { id: 'apache', name: 'Apache', isActive: true },
                { id: 'nginx', name: 'Nginx', isActive: false }
              ],
              isActive: true
            },
            {
              id: 'continuous_integration', 
              name: 'Continuous Integration',
              icon: 'fas fa-bolt',
              libraries: [
                { id: 'jenkins', name: 'Jenkins', isActive: false },
                { id: 'travisci', name: 'TravisCI', isActive: true },
                { id: 'bitbucket_pipelines', name: 'Bitbucket Pipelines', isActive: false }
              ],
              isActive: true
            },
            {
              id: 'test_coverage', 
              name: 'Test Coverage',
              icon: 'fas fa-bug',
              libraries: [
                { id: 'coveralls', name: 'Coveralls', isActive: true },
                { id: 'code_climate', name: 'Code Climate', isActive: false },
                { id: 'codecov', name: 'CodeCov', isActive: false }
              ],
              isActive: true
            }
          ]
        },
        {
          id: 'computer_networking',
          role: 'COMPUTER NETWORKING',
          icon: 'fas fa-wifi',
          tools: [
            {
              id: 'networks_nodes_setup', 
              name: 'Networks Nodes Setup',
              icon: 'fas fa-network-wired',
              libraries: [
                { id: 'repeaters', name: 'Repeaters', isActive: false },
                { id: 'bridges', name: 'Bridges', isActive: false },
                { id: 'switches', name: 'Switches', isActive: false }
              ],
              isActive: false
            },
            {
              id: 'network_performance', 
              name: 'Network Performance',
              icon: 'fas fa-tachometer-alt',
              libraries: [],
              isActive: false
            },
            {
              id: 'network_security', 
              name: 'Network Security',
              icon: 'fas fa-lock',
              libraries: [],
              isActive: false
            },
            {
              id: 'port_forwarding', 
              name: 'Port Forwarding',
              icon: 'fas fa-share',
              libraries: [],
              isActive: false
            },
            {
              id: 'network_load_balancing', 
              name: 'Network Load Balancing',
              icon: 'fas fa-retweet',
              libraries: [],
              isActive: false
            }
          ]
        },
        {
          id: 'collaboration',
          role: 'COLLABORATION',
          icon: 'fas fa-users',
          tools: [ 
            {
              id: 'git', 
              name: 'Git',
              icon: 'fab fa-git-alt',
              libraries: [],
              isActive: true
            },
            {
              id: 'github', 
              name: 'GitHub',
              icon: 'fab fa-github',
              libraries: [],
              isActive: true
            },
            {
              id: 'slack', 
              name: 'Slack',
              icon: 'fab fa-slack',
              libraries: [],
              isActive: true
            },
            {
              id: 'bitbucket', 
              name: 'Bitbucket',
              icon: 'fab fa-bitbucket',
              libraries: [],
              isActive: true
            },
            {
              id: 'jira', 
              name: 'Jira',
              icon: 'fab fa-jira',
              libraries: [],
              isActive: true
            },
            {
              id: 'trello', 
              name: 'Trello',
              icon: 'fab fa-trello',
              libraries: [],
              isActive: false
            }
          ]
        },
        {
          id: 'technologies',
          role: 'TECHNOLOGIES',
          icon: 'fas fa-code-branch',
          tools: [
            {
              id: 'composer', 
              name: 'Composer',
              icon: 'far fa-circle',
              libraries: [],
              isActive: true
            },
            {
              id: 'packagist', 
              name: 'Packagist',
              icon: 'far fa-circle',
              libraries: [],
              isActive: true
            },
            {
              id: 'npm', 
              name: 'npm',
              icon: 'far fa-circle',
              libraries: [],
              isActive: true
            },
            {
              id: 'boostnote', 
              name: 'Boostnote',
              icon: 'far fa-circle',
              libraries: [],
              isActive: true
            },
            {
              id: 'vscode', 
              name: 'VSCode',
              icon: 'far fa-circle',
              libraries: [],
              isActive: true
            },
            {
              id: 'sublimetext', 
              name: 'SublimeText',
              icon: 'far fa-circle',
              libraries: [],
              isActive: false
            },
            {
              id: 'filezilla', 
              name: 'FileZilla',
              icon: 'far fa-circle',
              libraries: [],
              isActive: true
            },
            {
              id: 'xampp', 
              name: 'XAMPP',
              icon: 'far fa-circle',
              libraries: [],
              isActive: false
            },
            {
              id: 'wamp', 
              name: 'WAMP',
              icon: 'far fa-circle',
              libraries: [],
              isActive: false
            },
            {
              id: 'netbeans', 
              name: 'NetBeans',
              icon: 'far fa-circle',
              libraries: [],
              isActive: false
            },
            {
              id: 'git_bash', 
              name: 'Git Bash',
              icon: 'far fa-circle',
              libraries: [],
              isActive: false
            },
            {
              id: 'github_desktop', 
              name: 'GitHub Desktop',
              icon: 'far fa-circle',
              libraries: [],
              isActive: false
            },
            {
              id: 'sourcetree', 
              name: 'Source Tree',
              icon: 'far fa-circle',
              libraries: [],
              isActive: false
            },
            {
              id: 'tortoisesvn', 
              name: 'TortoiseSVN',
              icon: 'far fa-circle',
              libraries: [],
              isActive: false
            },
            {
              id: 'brackets_editor', 
              name: 'Brackets Editor',
              icon: 'far fa-circle',
              libraries: [],
              isActive: false
            },
            {
              id: 'android_studio', 
              name: 'Android Studio',
              icon: 'far fa-circle',
              libraries: [],
              isActive: false
            },
            {
              id: 'laragon', 
              name: 'Laragon',
              icon: 'far fa-circle',
              libraries: [],
              isActive: false
            },
            {
              id: 'pip', 
              name: 'pip',
              icon: 'far fa-circle',
              libraries: [],
              isActive: true
            },
            {
              id: 'aws_cli', 
              name: 'aws cli',
              icon: 'far fa-circle',
              libraries: [],
              isActive: true
            }
          ]
        },
        {
          id: 'cloud_services',
          role: 'CLOUD SERVICES',
          icon: 'fas fa-cloud-upload-alt',
          tools: [
            {
              id: 'heroku', 
              name: 'Heroku',
              icon: 'far fa-circle',
              libraries: [],
              isActive: true
            },
            {
              id: 'firebase_cloud_firestore', 
              name: 'Firebase: Cloud Firestore',
              icon: 'far fa-circle',
              libraries: [],
              isActive: true
            },
            {
              id: 'github_pages', 
              name: 'Github Pages',
              icon: 'far fa-circle',
              libraries: [],
              isActive: true
            }
          ]
        }
      ],
    };
  }

  private getSkillTechnologyDetails(): JSX.Element[] {
    return this.state.skillTechnologyDetails.map((role: IRole): JSX.Element => {
      return (
        <div key={role.id} className={style['wrapper']}>
          <span className="st-role">
            <i className={style['role-icon'] + ' ' + role.icon} aria-hidden="true"></i>
            <h3 className={style['role-title']}>&nbsp;{role.role}</h3>
          </span>
          {this.getTools(role.tools)}
        </div> 
      );
    });
  }

  private getTools(tools: ITool[]): JSX.Element[] {
    
    return tools.map((tool: ITool): JSX.Element => {

      let toolClassName: string = style['tool'];
      
      if (!tool.isActive) {
        toolClassName += ' ' + style['inactive'];
      }

      return (
        <div key={tool.id}>
          <span className={toolClassName}>
            <i className={style['tool-icon'] + ' ' + tool.icon} aria-hidden="true"></i>
            <h4 className={style['tool-name']}>&nbsp;{tool.name}</h4>
          </span>
          {this.getLibraries(tool.libraries)}
        </div>
      );
    });
  }

  private getLibraries(libraries: ILibrary[]): JSX.Element[] {
    
    return libraries.map((library: ILibrary): JSX.Element => {
      
      let libraryClassName: string = style['library'];
      
      if (!library.isActive) {
        libraryClassName += ' ' + style['inactive'];
      }

      return (
        <p key={library.id} className={libraryClassName}><i className="fa fa-angle-right" aria-hidden="true"></i> {library.name}</p> 
      );
    });
  }

  public render(): JSX.Element {
    return (
      <div id="skill-technology-component" className={style['container']}>
        {this.getSkillTechnologyDetails()}
        <div className={style['note']}>
          <p>
            *The dark and bold fonts are the skills | technologies that are currently in use. Last updated April 12, 2020.
          </p>
        </div>
      </div>
    );
  }
}
