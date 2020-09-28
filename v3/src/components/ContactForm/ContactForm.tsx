import React, { Component } from 'react';

import configuration from '../../common/configuration';

import Loader from '../Loader/Loader';

import style from './ContactForm.module.scss';

interface IProperty {}

interface IState {
  contact: IContact
  loader: boolean;
}

interface IContact {
  name: string;
  email: string;
  message: string;
  webVersion: string;
}

export default class ContactForm extends Component<IProperty, IState> {

  public constructor(properties: any) {
    
    super(properties);

    this.state = {
      contact: {
        name: '',
        email: '',
        message: '',
        webVersion: configuration.buildId
      },
      loader: false
    };
  }

  private onSubmitFormHandler(event): void {

    event.preventDefault();
    
    if (
      (typeof this.state.contact.name === 'undefined' || this.state.contact.name === '') ||
      (typeof this.state.contact.email === 'undefined' || this.state.contact.email === '') ||
      (typeof this.state.contact.message === 'undefined' || this.state.contact.message === '')
    ) {
      alert('Please provide an input for the required fields.');
      return;
    }

    this.triggerLoader(true);

    fetch(
      configuration.api.contact, 
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type':'application/json', 
          'X-LORDDASHME-HEADER': '1'
        },
        body: JSON.stringify(this.state.contact)
      }
    ).then(async (response) => {

      this.triggerLoader(false);

      const responseJson = await response.json();

      if (response.status === 200) {
        alert('Message sent!');
        window.location.reload();
        return;
      }

      alert(responseJson.message);
      console.error(responseJson.message);
    });
  }

  private triggerLoader(visiblity: boolean): void {
    const state: IState = {...this.state};
    state['loader'] = visiblity;
    this.setState(state);
  }

  private handleFieldChange(key: string, event: any): void {
    
    let contact: IContact = this.state.contact;
    
    if (key === 'name') {
      contact['name'] = event.target.value;
    }
    if (key === 'email') {
      contact['email'] = event.target.value;
    }
    if (key === 'message') {
      contact['message'] = event.target.value;
    }

    const state: IState = {...this.state};
    
    state['contact'] = contact;

    this.setState(state);
  }

  private getForm(): JSX.Element {
    return (
      <form className={style['form']}>
        <div className="form-group">
          <label>NAME*</label>
          <input value={this.state.contact.name} onChange={this.handleFieldChange.bind(this, 'name')} className="form-control" type="text" placeholder="John Doe" />
        </div>
        <div className="form-group">
          <label>EMAIL*</label>
          <input value={this.state.contact.email} onChange={this.handleFieldChange.bind(this, 'email')} className="form-control" type="text" placeholder="john.doe@example.com" />
        </div>
        <div className="form-group">
          <label>MESSAGE*</label>
          <textarea value={this.state.contact.message} onChange={this.handleFieldChange.bind(this, 'message')} className={style['message'] + ' form-control'} placeholder="Say something..."></textarea>
        </div>
        <p className={style['form-tips']}>
          <b>*</b> is required field.
        </p>
        <div className={style['form-action']}>
          <button className="btn -black" onClick={this.onSubmitFormHandler.bind(this)}><b>SEND</b></button>
        </div>
      </form>
    );
  }

  public render(): JSX.Element {
    return (
      <div id="contact-form-component" className={style['container']}>
        <Loader visibility={this.state.loader}/>
        {this.getForm()}
      </div>
    );
  }
}
