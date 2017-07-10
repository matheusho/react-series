import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { init } from './billingCycleActions';
import FormGroup from '../common/form/formGroup';

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props;

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
  form: 'billingCycleForm', destroyOnUnmount: false
})(BillingCycleForm);

const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycleForm);