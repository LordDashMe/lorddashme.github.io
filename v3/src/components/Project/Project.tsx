import React, { Component } from 'react';

import { isSSR } from '../../common/helper';

import Firestore from '../Database/Firebase/Firestore';

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
  order: number;
  active: boolean;
}

export default class Project extends Component<IProperty, IState> {

  private isFullyMounted: boolean = false;

  public constructor(properties: any) {

    super(properties);

    this.state = {
      projects: [
        {
          id: '1',
          title: '',
          description: '',
          image: '',
          imageAlt: '',
          link: '',
          order: 0,
          active: false
        },
        {
          id: '2',
          title: '',
          description: '',
          image: '',
          imageAlt: '',
          link: '',
          order: 0,
          active: false
        },
        {
          id: '3',
          title: '',
          description: '',
          image: '',
          imageAlt: '',
          link: '',
          order: 0,
          active: false
        },
        {
          id: '4',
          title: '',
          description: '',
          image: '',
          imageAlt: '',
          link: '',
          order: 0,
          active: false
        },
        {
          id: '5',
          title: '',
          description: '',
          image: '',
          imageAlt: '',
          link: '',
          order: 0,
          active: false
        },
        {
          id: '6',
          title: '',
          description: '',
          image: '',
          imageAlt: '',
          link: '',
          order: 0,
          active: false
        },
        {
          id: '7',
          title: '',
          description: '',
          image: '',
          imageAlt: '',
          link: '',
          order: 0,
          active: false
        },
        {
          id: '8',
          title: '',
          description: '',
          image: '',
          imageAlt: '',
          link: '',
          order: 0,
          active: false
        },
        {
          id: '9',
          title: '',
          description: '',
          image: '',
          imageAlt: '',
          link: '',
          order: 0,
          active: false
        }
      ],
      loader: true 
    };
  }

  public set isMounted(status: boolean) {
    this.isFullyMounted = status;
  }

  public get isMounted(): boolean {
    return this.isFullyMounted;
  }

  public componentWillUnmount(): void {
    if (! isSSR()) {
      this.isMounted = false;
    }
  }

  public componentDidMount(): void {
    if (! isSSR()) {
      this.isMounted = true;
      this.fetchProjectsOnFireStore(); 
    }
  }

  private fetchProjectsOnFireStore(): void {

    Firestore.clearInstance();
    Firestore.initialize();
    Firestore.getInstance()
      .collection('projects')
      .where('active', '==', true)
      .orderBy('order', 'desc')
      .get()
      .then((querySnapshot: any): void => { 

        if (typeof querySnapshot.docs[0] === 'undefined') {
          return;
        }

        const projects: any = querySnapshot.docs.map((doc: any): IProject => {
          
          const document: any = doc.data();
          
          return {
            id: doc.id,
            title: document.title,
            description: document.description,
            image: document.image,
            imageAlt: document.imageAlt,
            link: document.link,
            order: document.order,
            active: document.active
          };
        });

        if (this.isMounted) {
          this.setState({
            projects: projects,
            loader: false
          });
        }
      });
  }

  private getProjects(): JSX.Element[] {
    return this.state.projects.map((project): JSX.Element => {

      if (project.title === '') {
        return (
          <div key={project.id} className={style['placeholder']}>
            <div className={style['ph-title']}></div>
            <div className={style['ph-description']}></div>
            <div className={style['ph-img']}></div>
            <div className={style['ph-link']}></div>
          </div>   
        );
      }

      return (
        <div key={project.id} className={style['wrapper']}>
          <h3 className={style['title']}>{project.title}</h3>
          <p className={style['description']}>{project.description}</p>
          <img alt={project.imageAlt} className={style['image']} src={project.image} />
          <div className={style['link']}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        </div>
      );
    });
  }

  public render(): JSX.Element {
    return (
      <div id="project-component" className={style['container']}>
        {this.getProjects()}
      </div>
    );
  }
}
