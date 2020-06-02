import React, { Component } from 'react';

import WEBSITE_CONFIGURATION from '../../../common/Website/configuration';

import Loader from '../../../components/Loader/Loader';

import style from './StrongPasswordForm.module.scss';

interface IProperty {}

interface IState {
  strongPassword: IStrongPassword
  strongPasswordResponse: string;
  loader: boolean;
}

interface IStrongPassword {
  length: number;
}

export default class StrongPasswordForm extends Component<IProperty, IState> {

  public constructor(properties: any) {
    
    super(properties);

    this.state = {
      strongPassword: {
        length: 10
      },
      strongPasswordResponse: '',
      loader: false
    };
  }

  private onSubmitFormHandler(event): void {

    if (!this.validateRequiredFields()) {
      alert('Please provide an input for the required fields.');
      return
    }

    this.triggerLoader(true);

    const options: object = {
      redirect: 'follow',
      referrerPolicy: 'unsafe-url',
      method: 'GET'
    };

    fetch(
      WEBSITE_CONFIGURATION.api.strongPassword + '?length=' + this.state.strongPassword.length, 
      options
    ).then(async (response) => {
      
      this.triggerLoader(false);

      const responseJson = await response.json();

      if (response.status === 200) {
        const state: IState = {...this.state};
        state['strongPasswordResponse'] = responseJson.strong_password;
        this.setState(state);
        return;
      }

      alert(responseJson.message);
      console.error(responseJson.message);
    });
  }

  private validateRequiredFields(): boolean {
    
    if (typeof this.state.strongPassword.length === 'undefined' || this.state.strongPassword.length === 0) {
      return false;
    }

    return true;
  }

  private triggerLoader(visiblity: boolean): void {
    
    const state: IState = {...this.state};
    
    state['loader'] = visiblity;
    
    this.setState(state);
  }

  private handleFieldChange(key: string, event: any): void {
    
    let strongPassword: IStrongPassword = this.state.strongPassword;
    
    if (key === 'length') {
      strongPassword['length'] = parseInt(event.target.value) || 0;
    }

    const state: IState = {...this.state};
    
    state['strongPassword'] = strongPassword;

    this.setState(state);
  }

  public render(): JSX.Element {
    return (
      <div id="strong-password-form-component" className={style['container']}>
        <Loader visibility={this.state.loader}/>
        <p className={style['note']}>
          A tool use for generating random sequence of characters based on the given length.
        </p>
        <p className={style['note']}>
          The maximum length to be generated is 100.
        </p>
        <form className={style['form']}>
          <div className="form-group">
            <label>LENGTH*</label>
            <input value={this.state.strongPassword.length} onChange={this.handleFieldChange.bind(this, 'length')} className="form-control" type="number" placeholder="10" />
          </div>
          <p className={style['form-tips']}>
            <b>*</b> is required field.
          </p>
          <div className="form-group">
            <label>GENERATED</label>
            <textarea value={this.state.strongPasswordResponse} className={style['textarea'] + ' form-control'} readOnly={true}></textarea>
          </div>
          <div className={style['form-action']}>
            <button className="btn -black" type="button" onClick={this.onSubmitFormHandler.bind(this)}><b>SUBMIT</b></button>
          </div>
        </form>
      </div>
    );
  }
}
