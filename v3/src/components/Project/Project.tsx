import React, { Component } from 'react';

import { isSSR } from '../../common/helper';

import Firestore from '../Database/Firebase/Firestore';
import Loader from '../Loader/Loader';

import style from './Project.module.scss';

interface IProperty {}

interface IState {
  projects: Array<IProjects>;
  loader: boolean;
}

interface IProjects {
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
    
    Firestore.initialize();

    Firestore.getInstance()
      .collection('projects')
      .orderBy('order', 'desc')
      .get()
      .then(querySnapshot => { 
        const projects = querySnapshot.docs.map((doc): IProjects => {
          const document = doc.data();
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

  private getProjects(): Array<JSX.Element> {
    return this.state.projects.map((project) => {
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
