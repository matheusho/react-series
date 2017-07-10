import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import dashboardReducer from '../dashboard/dashboardReducer';
import billingCycleReducer from '../billingCycle/billingCycleReducer';
import tabReducer from '../common/tab/tabReducer';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  billingCycle: billingCycleReducer,
  tab: tabReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;