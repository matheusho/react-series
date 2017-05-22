import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';

export default props => (
  <Switch>
    <Route path="/" component={Dashboard} />
    <Route path="/billingcycles" component={BillingCycle} />
    <Redirect from="*" to="/" />
  </Switch>
);