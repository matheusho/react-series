import axios from 'axios';
import { reset as resetForm, initialize } from 'redux-form';
import { toastr } from 'react-redux-toastr';

import { showTabs, selectTab } from '../common/tab/tabActions';

const BASE_URL = 'https://flashy-couch.glitch.me/api/billing-cycles';

export function getList() {
  const request = axios.get(BASE_URL);
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  };
}

export function create (values) {
  return submit('post', values);
}

export function update (values) {
  return submit('put', values);
}

export function remove (values) {
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

export function showUpdate (billingCycle) {
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('billingCycleForm', billingCycle)
  ];
}

export function showDelete (billingCycle) {
  return [
    showTabs('tabDelete'),
    selectTab('tabDelete'),
    initialize('billingCycleForm', billingCycle)
  ];
}

export function init () {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('billingCycleForm')
  ];
}