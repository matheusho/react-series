import React from 'react';
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import Dashboard from '../dashboard/dashboard';
import BillingCycle from '../billingCycle/billingCycle';

export default props => (
  <Switch>
    <Route path="/billingcycles" component={BillingCycle} />
    <Route exact path="/" component={Dashboard} />
    <Redirect from="*" to="/" />
  </Switch>
);
