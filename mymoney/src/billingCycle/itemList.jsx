import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { arrayInsert, arrayRemove, Field } from 'redux-form';

import Grid from '../common/layouts/grid';
import Input from '../common/form/input';
import If from '../common/operator/if';

class ItemList extends Component {
  constructor(props) {
    super(props);

    this.renderRows = this.renderRows.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add(index, item = {}) {
    if (!this.props.readOnly) {
      this.props.arrayInsert('billingCycleForm', this.props.field, index, item);
    }
  }

  remove(index) {
    if (!this.props.readOnly && this.props.list.length > 1) {
      this.props.arrayRemove('billingCycleForm', this.props.field, index);
    }
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map((item, index) => (
      <tr key={index}>
        <td>
          <Field
            component={Input}
            name={`${this.props.field}[${index}].name`}
            placeholder="Informe o nome"
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <Field
            component={Input}
            name={`${this.props.field}[${index}].value`}
            placeholder="Informe o valor"
            readOnly={this.props.readOnly}
          />
        </td>
        <If test={this.props.showStatus}>
          <td>
            <Field
              component={Input}
              name={`${this.props.field}[${index}].status`}
              placeholder="Informe o status"
              readOnly={this.props.readOnly}
            />
          </td>
        </If>
        <td className="table-actions">
          <button
            type="button"
            onClick={() => this.add((index + 1))}
            className="btn btn-success"
          >
            <i className="fa fa-plus"></i>
          </button>
          <button
            type="button"
            onClick={() => this.add((index + 1), item)}
            className="btn btn-warning"
          >
            <i className="fa fa-clone"></i>
          </button>
          <button
            type="button"
            onClick={() => this.remove(index)}
            className="btn btn-danger"
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>{this.props.legend}</legend>
        </fieldset>

        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Valor</th>
              <If test={this.props.showStatus}>
                <th>Status</th>
              </If>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </Grid>
    )
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ arrayInsert, arrayRemove }, dispatch);

export default connect(null, mapDispatchToProps)(ItemList);
