import React from 'react';

import Grid from '../common/layouts/grid';
import Row from '../common/layouts/row';
import ValueBox from '../common/widgets/ValueBox';

export default ({ credit, debt }) => (
  <Grid cols="12">
    <fieldset>
      <legend>Resumo</legend>
      <Row>
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
          value={`R$ ${credit - debt}`}
          text="Total consolidado"
        />
      </Row>
    </fieldset>
  </Grid>
);
