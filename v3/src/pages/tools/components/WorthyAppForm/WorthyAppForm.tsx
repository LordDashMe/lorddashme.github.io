import React, { Component } from 'react';

import Loader from '../../../../components/Loader/Loader';

import style from './WorthyAppForm.module.scss';

interface IProperty {}

interface IState {
  expenseForm: IExpenseForm
  loader: boolean;
}

interface IExpenseForm {
  token: string;
  label: string;
  type: string;
  cost: number;
  date: string
}

export default class WortyAppForm extends Component<IProperty, IState> {

  public constructor(properties: any) {
    
    super(properties);

    this.state = {
      expenseForm: {
        token: '',
        label: '',
        type: '',
        cost: 0,
        date: ''
      },
      loader: false
    };
  }

  private onSubmitFormHandler(event): void {

    if (! this.validateRequiredFields()) {
      alert('Please provide an input for the required fields.');
      return
    }

    this.triggerLoader(true);

    const options: object = {
      redirect: 'follow',
      referrerPolicy: 'unsafe-url',
      method: 'POST'
    };

    options['headers'] = {
      'Content-Type': 'application/json', 
      'X-WORTHY-APP-HEADER': 1, 
      'X-WORTHY-APP-JWT': this.state.expenseForm.token
    };

    options['body'] = JSON.stringify({
      'systemName': 'expenses',
      'formFields': {
        'label': this.state.expenseForm.label,
        'type': this.state.expenseForm.type,
        'cost': this.state.expenseForm.cost,
        'date': this.state.expenseForm.date
      }
    });

    fetch(
      'https://worthy-app-backend.herokuapp.com/form/entry/', 
      options
    ).then(async (response) => {
      this.triggerLoader(false);
      if (response.status === 200) {
        const responseJson = await response.json();
        alert(responseJson.message);
        return;
      }
      alert('Saving failed, please check the browser console log.');
    }).catch((error) => {
      this.triggerLoader(false);
      alert('Oh ohh, something\'s wrong. Please check the browser console log.');
      console.error('Error:', error);
    });
  }

  private validateRequiredFields(): boolean {
    if (
      (typeof this.state.expenseForm.token === 'undefined' || this.state.expenseForm.token === '') ||
      (typeof this.state.expenseForm.label === 'undefined' || this.state.expenseForm.label === '') ||
      (typeof this.state.expenseForm.type === 'undefined' || this.state.expenseForm.type === '') || 
      (typeof this.state.expenseForm.cost === 'undefined' || this.state.expenseForm.cost === 0) ||
      (typeof this.state.expenseForm.date === 'undefined' || this.state.expenseForm.date === '')
    ) {
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
    
    let expenseForm: IExpenseForm = this.state.expenseForm;
    
    if (key === 'token') {
      expenseForm['token'] = event.target.value;
    }
    if (key === 'label') {
      expenseForm['label'] = event.target.value;
    }
    if (key === 'type') {
      expenseForm['type'] = event.target.value;
    }
    if (key === 'cost') {
      expenseForm['cost'] = event.target.value;
    }
    if (key === 'date') {
      expenseForm['date'] = event.target.value;
    }

    const state: IState = {...this.state};
    
    state['expenseForm'] = expenseForm;

    this.setState(state);
  }

  public render(): JSX.Element {
    return (
      <div id="worthy-app-form-component" className={style['container']}>
        <Loader visibility={this.state.loader}/>
        <form className={style['form']}>
          <div className="form-group">
            <label>TOKEN*</label>
            <input value={this.state.expenseForm.token} onChange={this.handleFieldChange.bind(this, 'token')} className="form-control" type="text" placeholder="qwerty..." />
          </div>
          <div className="form-group">
            <label>LABEL*</label>
            <input value={this.state.expenseForm.label} onChange={this.handleFieldChange.bind(this, 'label')} className="form-control" type="text" placeholder="Food Resources" />
          </div>
          <div className="form-group">
            <label>TYPE*</label>
            <select onChange={this.handleFieldChange.bind(this, 'type')} className="form-control">
              <option value="communication">Communication</option>
              <option value="transportation">Transportation</option>
              <option value="representation">Representation</option>
              <option value="sundries">Sundries</option>
            </select>
          </div>
          <div className="form-group">
            <label>COST*</label>
            <input value={this.state.expenseForm.cost} onChange={this.handleFieldChange.bind(this, 'cost')} className="form-control" type="number" placeholder="100" />
          </div>
          <div className="form-group">
            <label>DATE*</label>
            <input value={this.state.expenseForm.date} onChange={this.handleFieldChange.bind(this, 'date')} className="form-control" type="text" placeholder="YYYY-MM-DD" />
          </div>
          <p className={style['form-tips']}>
            <b>*</b> is required field.
          </p>
          <div className={style['form-action']}>
            <button className="btn -black" type="button" onClick={this.onSubmitFormHandler.bind(this)}><b>SUBMIT</b></button>
          </div>
        </form>
      </div>
    );
  }
}
