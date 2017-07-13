import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { init } from './billingCycleActions';
import FormGroup from '../common/form/formGroup';
import ItemList from './itemList';
import BillingCycleSummary from './billingCycleSummary';

class BillingCycleForm extends Component {
  constructor(props) {
    super(props);

    this.calculateSummary = this.calculateSummary.bind(this);
  }

  calculateSummary() {
    const { credits, debts } = this.props;
    const sum = (t, v) => t + v;
    return credits.length && debts.length
      ? {
          sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
          sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum),
        }
      : {};
  }

  render() {
    const { handleSubmit, readOnly, credits, debts } = this.props;
    const { sumOfCredits, sumOfDebts } = this.calculateSummary();

    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            component={FormGroup}
            name="name"
            label="Nome"
            placeholder="Informe o nome"
            readOnly={readOnly}
            cols="12 4"
          />
          <Field
            component={FormGroup}
            type="number"
            name="month"
            label="Mês"
            placeholder="Informe o mês"
            readOnly={readOnly}
            cols="12 4"
          />
          <Field
            component={FormGroup}
            type="number"
            name="year"
            label="Ano"
            placeholder="Informe o ano"
            readOnly={readOnly}
            cols="12 4"
          />
          <BillingCycleSummary
            credit={sumOfCredits}
            debt={sumOfDebts}
          />
          <ItemList
            cols="12 6"
            field="credits"
            legend="Créditos"
            list={credits}
            readOnly={this.props.readOnly}
          />
          <ItemList
            cols="12 6"
            field="debts"
            legend="Débitos"
            list={debts}
            showStatus={true}
            readOnly={this.props.readOnly}
          />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button type="button" className="btn btn-default" onClick={this.props.init}>Cancelar</button>
        </div>
      </form>
    )
  }
}

BillingCycleForm = reduxForm({
  form: 'billingCycleForm',
  destroyOnUnmount: false
})(BillingCycleForm);

const selector = formValueSelector('billingCycleForm');
const mapStateToProps = (state) => ({
  credits: selector(state, 'credits'),
  debts: selector(state, 'debts')
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
