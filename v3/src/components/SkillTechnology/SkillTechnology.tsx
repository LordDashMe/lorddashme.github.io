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
  is_active: boolean;
}

interface ILibrary {
  id: string;
  name: string;
  is_active: boolean;
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
                { id: 'symfony', name: 'Symfony', is_active: true },
                { id: 'wordpress', name: 'Wordpress', is_active: true },
                { id: 'laravel', name: 'Laravel', is_active: false },
                { id: 'drupal', name: 'Drupal', is_active: false },
                { id: 'codeigniter', name: 'CodeIgniter', is_active: true },
                { id: 'phpunit', name: 'PHPUnit', is_active: true }
              ],
              is_active: true
            },
            {
              id: 'python', 
              name: 'Python',
              icon: 'fab fa-python',
              libraries: [
                { id: 'falcon',  name: 'Falcon', is_active: true },
                { id: 'pytest',  name: 'PyTest', is_active: true }
              ],
              is_active: true
            },
            {
              id: 'javascript', 
              name: 'JavaScript',
              icon: 'fab fa-js',
              libraries: [
                { id: 'nodejs', name: 'NodeJS', is_active: true },
                { id: 'jquery', name: 'JQuery', is_active: true },
                { id: 'angularjs', name: 'AngularJS', is_active: false },
                { id: 'jest', name: 'Jest', is_active: true },
                { id: 'typescript', name: 'TypeScript', is_active: true },
                { id: 'react', name: 'React', is_active: true },
                { id: 'angular', name: 'Angular', is_active: false },
                { id: 'rxjs', name: 'RxJS', is_active: false }
              ],
              is_active: true
            },
            {
              id: 'sql', 
              name: 'SQL',
              icon: 'fas fa-database',
              libraries: [
                { id: 'mysql', name: 'MySQL', is_active: true },
                { id: 'sqlite', name: 'SQLite', is_active: false },
                { id: 'mssql', name: 'MsSQL', is_active: false },
                { id: 'postgresql', name: 'PostgreSQL', is_active: false }
              ],
              is_active: true
            },
            {
              id: 'nosql', 
              name: 'NoSQL',
              icon: 'fas fa-database',
              libraries: [
                { id: 'mongodb', name: 'MongoDB', is_active: true }
              ],
              is_active: true
            },
            {
              id: 'html', 
              name: 'HTML',
              icon: 'fab fa-html5',
              libraries: [
                { id: 'markdown', name: 'Markdown', is_active: true }
              ],
              is_active: true
            },
            {
              id: 'css', 
              name: 'CSS',
              icon: 'fab fa-css3',
              libraries: [
                { id: 'sass', name: 'Sass', is_active: true }
              ],
              is_active: true
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
              is_active: false
            },
            {
              id: 'android', 
              name: 'Android',
              icon: 'fab fa-android',
              libraries: [
                { id: 'java', name: 'Java', is_active: false }
              ],
              is_active: false
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
                { id: 'swing', name: 'Swing', is_active: false },
              ],
              is_active: false
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
                { id: 'docker_compose', name: 'Docker Compose', is_active: true },
              ],
              is_active: true
            },
            {
              id: 'linux_server', 
              name: 'Linux Server',
              icon: 'fab fa-linux',
              libraries: [],
              is_active: true
            },
            {
              id: 'windows_server', 
              name: 'Windows Server',
              icon: 'fab fa-windows',
              libraries: [],
              is_active: false
            },
            {
              id: 'web_servers', 
              name: 'Web Servers',
              icon: 'fas fa-cubes',
              libraries: [
                { id: 'apache', name: 'Apache', is_active: true },
                { id: 'nginx', name: 'Nginx', is_active: false }
              ],
              is_active: true
            },
            {
              id: 'continuous_integration', 
              name: 'Continuous Integration',
              icon: 'fas fa-bolt',
              libraries: [
                { id: 'jenkins', name: 'Jenkins', is_active: false },
                { id: 'travisci', name: 'TravisCI', is_active: true },
                { id: 'bitbucket_pipelines', name: 'Bitbucket Pipelines', is_active: false }
              ],
              is_active: true
            },
            {
              id: 'test_coverage', 
              name: 'Test Coverage',
              icon: 'fas fa-bug',
              libraries: [
                { id: 'coveralls', name: 'Coveralls', is_active: true },
                { id: 'code_climate', name: 'Code Climate', is_active: false },
                { id: 'codecov', name: 'CodeCov', is_active: false }
              ],
              is_active: true
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
                { id: 'repeaters', name: 'Repeaters', is_active: false },
                { id: 'bridges', name: 'Bridges', is_active: false },
                { id: 'switches', name: 'Switches', is_active: false }
              ],
              is_active: false
            },
            {
              id: 'network_performance', 
              name: 'Network Performance',
              icon: 'fas fa-tachometer-alt',
              libraries: [],
              is_active: false
            },
            {
              id: 'network_security', 
              name: 'Network Security',
              icon: 'fas fa-lock',
              libraries: [],
              is_active: false
            },
            {
              id: 'port_forwarding', 
              name: 'Port Forwarding',
              icon: 'fas fa-share',
              libraries: [],
              is_active: false
            },
            {
              id: 'network_load_balancing', 
              name: 'Network Load Balancing',
              icon: 'fas fa-retweet',
              libraries: [],
              is_active: false
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
              is_active: true
            },
            {
              id: 'github', 
              name: 'GitHub',
              icon: 'fab fa-github',
              libraries: [],
              is_active: true
            },
            {
              id: 'slack', 
              name: 'Slack',
              icon: 'fab fa-slack',
              libraries: [],
              is_active: true
            },
            {
              id: 'bitbucket', 
              name: 'Bitbucket',
              icon: 'fab fa-bitbucket',
              libraries: [],
              is_active: true
            },
            {
              id: 'jira', 
              name: 'Jira',
              icon: 'fab fa-jira',
              libraries: [],
              is_active: true
            },
            {
              id: 'trello', 
              name: 'Trello',
              icon: 'fab fa-trello',
              libraries: [],
              is_active: false
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
              is_active: true
            },
            {
              id: 'firebase_cloud_firestore', 
              name: 'Firebase: Cloud Firestore',
              icon: 'far fa-circle',
              libraries: [],
              is_active: true
            },
            {
              id: 'github_pages', 
              name: 'Github Pages',
              icon: 'far fa-circle',
              libraries: [],
              is_active: true
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
              is_active: true
            },
            {
              id: 'packagist', 
              name: 'Packagist',
              icon: 'far fa-circle',
              libraries: [],
              is_active: true
            },
            {
              id: 'npm', 
              name: 'npm',
              icon: 'far fa-circle',
              libraries: [],
              is_active: true
            },
            {
              id: 'boostnote', 
              name: 'Boostnote',
              icon: 'far fa-circle',
              libraries: [],
              is_active: true
            },
            {
              id: 'vscode', 
              name: 'VSCode',
              icon: 'far fa-circle',
              libraries: [],
              is_active: true
            },
            {
              id: 'sublimetext', 
              name: 'SublimeText',
              icon: 'far fa-circle',
              libraries: [],
              is_active: false
            },
            {
              id: 'filezilla', 
              name: 'FileZilla',
              icon: 'far fa-circle',
              libraries: [],
              is_active: true
            },
            {
              id: 'xampp', 
              name: 'XAMPP',
              icon: 'far fa-circle',
              libraries: [],
              is_active: false
            },
            {
              id: 'wamp', 
              name: 'WAMP',
              icon: 'far fa-circle',
              libraries: [],
              is_active: false
            },
            {
              id: 'netbeans', 
              name: 'NetBeans',
              icon: 'far fa-circle',
              libraries: [],
              is_active: false
            },
            {
              id: 'git_bash', 
              name: 'Git Bash',
              icon: 'far fa-circle',
              libraries: [],
              is_active: false
            },
            {
              id: 'github_desktop', 
              name: 'GitHub Desktop',
              icon: 'far fa-circle',
              libraries: [],
              is_active: false
            },
            {
              id: 'sourcetree', 
              name: 'Source Tree',
              icon: 'far fa-circle',
              libraries: [],
              is_active: false
            },
            {
              id: 'tortoisesvn', 
              name: 'TortoiseSVN',
              icon: 'far fa-circle',
              libraries: [],
              is_active: false
            },
            {
              id: 'brackets_editor', 
              name: 'Brackets Editor',
              icon: 'far fa-circle',
              libraries: [],
              is_active: false
            },
            {
              id: 'android_studio', 
              name: 'Android Studio',
              icon: 'far fa-circle',
              libraries: [],
              is_active: false
            },
            {
              id: 'laragon', 
              name: 'Laragon',
              icon: 'far fa-circle',
              libraries: [],
              is_active: false
            },
            {
              id: 'pip', 
              name: 'pip',
              icon: 'far fa-circle',
              libraries: [],
              is_active: true
            },
            {
              id: 'aws_cli', 
              name: 'aws cli',
              icon: 'far fa-circle',
              libraries: [],
              is_active: true
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
      
      if (! tool.is_active) {
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
      
      if (! library.is_active) {
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
