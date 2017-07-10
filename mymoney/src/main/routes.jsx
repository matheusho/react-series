import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../dashboard2/dashboard2';
import BillingCycle from '../billingCycle/billingCycle';

export default props => (
  <Switch>
    <Route path="/billingcycles" component={BillingCycle} />
    <Route path="/" component={Dashboard} />
    <Redirect from="*" to="/" />
  </Switch>
);
