import axios from 'axios';

const BASE_URL = 'https://flashy-couch.glitch.me/api';

export const getSummary = () => {
  const request = axios.get(`${BASE_URL}/billing-cycles/summary`);
  return {
    type: 'BILLING_SUMMARY_FETCHED',
    payload: request
  }
};