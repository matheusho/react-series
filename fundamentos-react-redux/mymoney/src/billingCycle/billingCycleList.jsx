import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getList, showUpdate, showDelete } from './billingCycleActions';

class BillingCycleList extends Component {

  constructor(props) {
    super(props);

    this.renderRows = this.renderRows.bind(this);
  }

  componentWillMount() {
    this.props.getList();
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map((billingCycle) => (
      <tr key={billingCycle._id}>
        <td>{billingCycle.name}</td>
        <td>{billingCycle.month}</td>
        <td>{billingCycle.year}</td>
        <td>
          <button
            onClick={() => this.props.showUpdate(billingCycle)}
            className="btn btn-warning"
          >
            <i className="fa fa-edit"></i>
          </button>
          <button
            onClick={() => this.props.showDelete(billingCycle)}
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
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
              <th className="table-actions">Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ list: state.billingCycle.list });
const mapActionsToProps = (dispatch) => 
  bindActionCreators({ getList, showUpdate, showDelete }, dispatch);

export default connect(mapStateToProps, mapActionsToProps)(BillingCycleList);
