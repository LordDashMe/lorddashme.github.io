import React, { Component } from 'react';

import { isSSR } from '../../common/helper';

import Firestore from '../Database/Firebase/Firestore';
import Loader from '../Loader/Loader';

import style from './Project.module.scss';

interface IProperty {}

interface IState {
  projects: IProject[];
  loader: boolean;
}

interface IProject {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
}

export default class Project extends Component<IProperty, IState> {

  public constructor(properties: any) {

    super(properties);
    
    this.state = {
      projects: [],
      loader: true 
    };
  }

  public componentDidMount(): void {
    if (! isSSR()) {
      this.fetchProjectsOnFireStore(); 
    }
  }

  private fetchProjectsOnFireStore(): void {
    
    Firestore.clearInstance();
    Firestore.initialize();
    Firestore.getInstance()
      .collection('projects')
      .orderBy('order', 'desc')
      .get()
      .then((querySnapshot: any): void => { 

        const projects: any = querySnapshot.docs.map((doc: any): IProject => {
          
          const document: any = doc.data();
          
          return {
            id: doc.id,
            title: document.title,
            description: document.description,
            image: document.image,
            imageAlt: document.imageAlt,
            link: document.link
          };
        });

        this.setState({
          projects: projects,
          loader: false
        });
      });
  }

  private getProjects(): JSX.Element[] {
    return this.state.projects.map((project): JSX.Element => {
      return (
        <div key={project.id} className={style['wrapper']}>
          <h3 className={style['title']}>{project.title}</h3>
          <p className={style['description']}>{project.description}</p>
          <img alt={project.imageAlt} className={style['image']} src={project.image} />
          <a className={style['link']} href={project.link} target="_blank" rel="noopener noreferrer">View More</a>
        </div>
      );
    });
  }

  public render(): JSX.Element {
    return (
      <div id="project-component" className={style['container']}>
        <Loader visibility={this.state.loader}/>
        {this.getProjects()}
      </div>
    );
  }
}
