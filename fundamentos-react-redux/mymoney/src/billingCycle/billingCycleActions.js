import axios from 'axios';
import { reset as resetForm, initialize } from 'redux-form';
import { toastr } from 'react-redux-toastr';

import { showTabs, selectTab } from '../common/tab/tabActions';

const BASE_URL = 'https://flashy-couch.glitch.me/api/billing-cycles';
const INITIAL_VALUES = { credits: [{}], debts: [{}] };

export const getList =() => {
  const request = axios.get(BASE_URL, {
    params: { sort: 'month' }
  });

  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  };
}

export const create = (values) => {
  return submit('post', values);
}

export const update = (values) => {
  return submit('put', values);
}

export const remove = (values) => {
  return submit('delete', values);
}

function submit (method, values) {
  return (dispatch) => {
    const id = values._id || '';
    axios[method](`${BASE_URL}/${id}`, values)
      .then((response) => {
        toastr.success('Sucesso', 'Operação realizada com sucesso.');
        dispatch(init());
      })
      .catch((err) => {
        err.response.data.errors.map((e) => toastr.error('Erro', e));
      });
  };
}

export const showUpdate = (billingCycle) => {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle)
  ];
}

export const showDelete = (billingCycle) => {
  return [
    showTabs('tabDelete'),
    selectTab('tabDelete'),
    initialize('billingCycleForm', billingCycle)
  ];
}

export const init = () => {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm', INITIAL_VALUES)
  ];
}
