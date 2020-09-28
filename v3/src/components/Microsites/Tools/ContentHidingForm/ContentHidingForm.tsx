import React, { Component } from 'react';

import configuration from '../../../../common/configuration';

import Loader from '../../../Loader/Loader';

import style, { textarea } from './ContentHidingForm.module.scss';

interface IProperty {}

interface IState {
  contentHiding: IContentHiding
  contentHidingResponse: string;
  passwordShowHide: boolean;
  loader: boolean;
}

interface IContentHiding {
  actionType: string;
  cipherMethod: string;
  password: string;
  content: string;
}

export default class ContentHidingForm extends Component<IProperty, IState> {

  protected outputTextarea: any = null;

  public constructor(properties: any) {
    
    super(properties);

    this.state = {
      contentHiding: {
        actionType: 'encrypt',
        cipherMethod: 'AES128',
        password: '',
        content: ''
      },
      contentHidingResponse: '',
      passwordShowHide: false,
      loader: false
    };
  }

  private onPasswordShowHideHandler(event): void  {

    event.preventDefault();

    const state: IState = {...this.state};

    state['passwordShowHide'] = (!state.passwordShowHide);

    this.setState(state);
  }

  private onOutputCopyHandler(event): void  {

    event.preventDefault();

    this.outputTextarea.select();
    
    document.execCommand('copy');
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
      method: 'POST',
      body: JSON.stringify({
        action_type: this.state.contentHiding.actionType,
        cipher_method: this.state.contentHiding.cipherMethod,
        password: this.state.contentHiding.password,
        content: this.state.contentHiding.content
      })
    };

    fetch(
      configuration.api.contentHiding, 
      options
    ).then(async (response) => {
      
      this.triggerLoader(false);

      const responseJson = await response.json();

      if (response.status === 200) {
        const state: IState = {...this.state};
        state['contentHidingResponse'] = responseJson.content;
        this.setState(state);
        return;
      }

      alert(responseJson.message);
      console.error(responseJson.message);
    });

  }

  private validateRequiredFields(): boolean {

    console.log(this.state.contentHiding);
    
    if (typeof this.state.contentHiding.actionType === 'undefined' || this.state.contentHiding.actionType === '') {
      return false;
    }
    if (typeof this.state.contentHiding.cipherMethod === 'undefined' || this.state.contentHiding.cipherMethod === '') {
      return false;
    }
    if (typeof this.state.contentHiding.password === 'undefined' || this.state.contentHiding.password === '') {
      return false;
    }
    if (typeof this.state.contentHiding.content === 'undefined' || this.state.contentHiding.content === '') {
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
    
    let contentHiding: IContentHiding = this.state.contentHiding;
    
    if (key === 'actionType') {
      contentHiding['actionType'] = event.target.value || '';
    }
    if (key === 'cipherMethod') {
      contentHiding['actionType'] = event.target.value || '';
    }
    if (key === 'password') {
      contentHiding['password'] = event.target.value || '';
    }
    if (key === 'content') {
      contentHiding['content'] = event.target.value || '';
    }

    const state: IState = {...this.state};
    
    state['contentHiding'] = contentHiding;

    this.setState(state);
  }

  public render(): JSX.Element {
    return (
      <div id="strong-password-form-component" className={style['container']}>
        <Loader visibility={this.state.loader} />
        <p className={style['note']}>
          A simple tool for encrypting or decrypting data based on the selected option for the encryption algorithm.
        </p>
        <form className={style['form']}>
          <div className="form-group">
            <label>ACTION*</label>
            <select className="form-control" onChange={this.handleFieldChange.bind(this, 'actionType')}>
              <option value="encrypt">ENCRYPT</option>
              <option value="decrypt">DECRYPT</option>
            </select>
          </div>
          <div className="form-group">
            <label>CIPHER METHOD*</label>
            <select className="form-control" onChange={this.handleFieldChange.bind(this, 'cipherMethod')}>
              <option value="AES128">AES128</option>
              <option value="AES192">AES192</option>
              <option value="AES256">AES256</option>
              <option value="BF">BF</option>
              <option value="CAST">CAST</option>
              <option value="CAST-cbc">CAST-cbc</option>
              <option value="IDEA">IDEA</option>
            </select>
          </div>
          <div className="form-group">
            <label>PASSWORD*</label>
            <div className={style['password-wrapper']}>
              <input value={this.state.contentHiding.password} onChange={this.handleFieldChange.bind(this, 'password')} className={'form-control ' + style['password']} type={this.state.passwordShowHide ? 'text' : 'password'} />
              <button className={'btn -black ' + style['password-show-hide']} onClick={this.onPasswordShowHideHandler.bind(this)}><b>Show | Hide</b></button>
            </div>
          </div>
          <div className="form-group">
            <label>CONTENT*</label>
            <textarea value={this.state.contentHiding.content} onChange={this.handleFieldChange.bind(this, 'content')} className={style['textarea'] + ' form-control'}></textarea>
          </div>
          <p className={style['form-tips']}>
            <b>*</b> is required field.
          </p>
          <div className="form-group">
            <label>OUTPUT</label>
            <div className={style['output-wrapper']}>
              <textarea ref={(outputTextarea) => this.outputTextarea = outputTextarea} value={this.state.contentHidingResponse} className={style['textarea'] + ' form-control'} readOnly={true}></textarea>
              <button className={'btn -black ' + style['output-copy-clipboard']} onClick={this.onOutputCopyHandler.bind(this)}><b>COPY</b></button> 
            </div>
          </div>
          <div className={style['form-action']}>
            <button className="btn -black" onClick={this.onSubmitFormHandler.bind(this)}><b>SUBMIT</b></button>
          </div>
        </form>
      </div>
    );
  }
}
