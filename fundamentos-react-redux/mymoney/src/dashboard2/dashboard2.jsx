import React, { Component } from 'react';
import axios from 'axios';

import Content from '../common/templates/content';
import ContentHeader from '../common/templates/contentHeader';
import ValueBox from '../common/widgets/valueBox';

const BASE_URL = 'https://flashy-couch.glitch.me/api';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credit: 0,
      debt: 0
    };

    this.getSummary = this.getSummary.bind(this);
  }

  componentWillMount() {
    this.getSummary();
  }

  getSummary() {
    axios.get(`${BASE_URL}/billing-cycles/summary`)
      .then(resp => this.setState(resp.data));
  }

  render() {
    const { credit, debt } = this.state;

    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 2.0" />
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
