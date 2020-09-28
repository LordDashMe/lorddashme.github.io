import React, { Component } from 'react';

import Loader from '../../../../components/Loader/Loader';

import style from './RequestifyForm.module.scss';

interface IProperty {}

interface IState {
  requestify: IRequestify
  requestifyResponse: string;
  loader: boolean;
}

interface IRequestify {
  url: string;
  method: string;
  headers: string;
  body: string;
}

export default class RequestifyForm extends Component<IProperty, IState> {

  public constructor(properties: any) {
    
    super(properties);

    this.state = {
      requestify: {
        url: '',
        method: 'GET',
        headers: '{"Content-Type": "application/json"}',
        body: '{}'
      },
      requestifyResponse: '',
      loader: false
    };
  }

  private onSubmitFormHandler(event): void {

    event.preventDefault();

    if (!this.validateRequiredFields()) {
      alert('Please provide an input for the required fields.');
      return;
    }

    this.triggerLoader(true);

    const options: object = {
      redirect: 'follow',
      referrerPolicy: 'unsafe-url',
      method: this.state.requestify.method
    };

    options['headers'] = JSON.parse(this.state.requestify.headers);

    if (this.state.requestify.method === 'POST') {
      options['body'] = this.state.requestify.body;
    }

    fetch(
      this.state.requestify.url, 
      options
    ).then(async (response) => {
      this.triggerLoader(false);
      const responseJson = await response.json();
      const output = {
        url: response.url,
        status: response.status,
        statusText: response.statusText,
        body: responseJson
      };
      this.setRequestifyResponse(JSON.stringify(output));
    }).catch((error) => {
      this.triggerLoader(false);
      alert('Oh ohh, something\'s wrong. Please check the browser console log.');
      console.error('Error:', error);
    });
  }

  private validateRequiredFields(): boolean {
    if (
      (typeof this.state.requestify.url === 'undefined' || this.state.requestify.url === '') ||
      (typeof this.state.requestify.method === 'undefined' || this.state.requestify.method === '') ||
      (typeof this.state.requestify.headers === 'undefined' || this.state.requestify.headers === '') || 
      (typeof this.state.requestify.body === 'undefined' || this.state.requestify.body === '')
    ) {
      return false;
    }
    return true;
  }

  private setRequestifyResponse(response): void {
    
    const state: IState = {...this.state};

    state['requestifyResponse'] = response;

    this.setState(state);
  }

  private triggerLoader(visiblity: boolean): void {
    
    const state: IState = {...this.state};
    
    state['loader'] = visiblity;
    
    this.setState(state);
  }

  private handleFieldChange(key: string, event: any): void {
    
    let requestify: IRequestify = this.state.requestify;
    
    if (key === 'url') {
      requestify['url'] = event.target.value;
    }
    if (key === 'method') {
      requestify['method'] = event.target.value;
    }
    if (key === 'headers') {
      requestify['headers'] = event.target.value;
    }
    if (key === 'body') {
      requestify['body'] = event.target.value;
    }

    const state: IState = {...this.state};
    
    state['requestify'] = requestify;

    this.setState(state);
  }

  public getBodyField(): JSX.Element | null {
    if (this.state.requestify.method === 'POST') {
      return (
        <div className="form-group">
          <label>BODY*</label>
          <textarea value={this.state.requestify.body} onChange={this.handleFieldChange.bind(this, 'body')} className={style['textarea'] + ' form-control'} placeholder="{...}"></textarea>
        </div>
      );
    }
    return null;
  }

  public render(): JSX.Element {
    return (
      <div id="requestify-form-component" className={style['container']}>
        <Loader visibility={this.state.loader} />
        <p className={style['note']}>
          A simple simulation tool for HTTP request content type json.
        </p>
        <p className={style['note']}>
          This tool only supports "Content-Type: application/json" request header and it will not going to support other content type in the future. 
          If you want an extensive tool for HTTP request simulation I recommend you to check <a href="https://www.postman.com/" rel="noopener noreferrer">Postman</a>, that's really a great app!
        </p>
        <form className={style['form']}>
          <div className="form-group">
            <label>URL*</label>
            <input value={this.state.requestify.url} onChange={this.handleFieldChange.bind(this, 'url')} className="form-control" type="text" placeholder="https://<domain>/v1/<end-point>" />
          </div>
          <div className="form-group">
            <label>METHOD*</label>
            <select onChange={this.handleFieldChange.bind(this, 'method')} className="form-control">
              <option value="GET">GET</option>
              <option value="POST">POST</option>
            </select>
          </div>
          <div className="form-group">
            <label>HEADERS*</label>
            <textarea value={this.state.requestify.headers} onChange={this.handleFieldChange.bind(this, 'headers')} className={style['textarea'] + ' form-control'} placeholder="{...}"></textarea>
          </div>
          {this.getBodyField()}
          <p className={style['form-tips']}>
            <b>*</b> is required field.
          </p>
          <div className="form-group">
            <label>RESPONSE</label>
            <textarea value={this.state.requestifyResponse} className={style['textarea'] + ' form-control'} readOnly={true}></textarea>
          </div>
          <div className={style['form-action']}>
            <button className="btn -black" onClick={this.onSubmitFormHandler.bind(this)}><b>SUBMIT</b></button>
          </div>
        </form>
      </div>
    );
  }
}
