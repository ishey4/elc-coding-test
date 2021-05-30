import axios from 'axios';

import { settings } from '../scripts/settings/settings';

export const productSearch = (searchTerm) => {
  const { host, searchEndPoint } = settings();
  const url = `${host}/${searchEndPoint}`

  return axios.get(url, { params: { query: searchTerm } });
}