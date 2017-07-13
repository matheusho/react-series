import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import { reducer as ToastrReducer } from 'react-redux-toastr';
import AuthReducer from '../auth/authReducer';
import DashboardReducer from '../dashboard/dashboardReducer';
import BillingCycleReducer from '../billingCycle/billingCycleReducer';

import TabReducer from '../common/tab/tabReducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  dashboard: DashboardReducer,
  billingCycle: BillingCycleReducer,
  tab: TabReducer,
  form: FormReducer,
  toastr: ToastrReducer
});

export default rootReducer;
