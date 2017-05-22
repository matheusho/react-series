import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSummary } from './dashboardActions';
import Content from '../commons/templates/content';
import ContentHeader from '../commons/templates/contentHeader';
import ValueBox from '../commons/widgets/valueBox';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getSummary();
  }

  render() {
    const { credit, debt } = this.props.summary;

    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content>
          <ValueBox
            cols="12 4"
            color="green"
            icon="bank"
            value={`R$ ${credit}`}
            text="Total de créditos"
          />
          <ValueBox
            cols="12 4"
            color="red"
            icon="credit-card"
            value={`R$ ${debt}`}
            text="Total de débitos"
          />
          <ValueBox
            cols="12 4"
            color="blue"
            icon="money"
            value="R$ 10"
            text="Total consolidado"
          />
        </Content>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.dashboard });
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);