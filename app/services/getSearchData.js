import axios from 'axios';

export const search = (searchTerm) => axios.get('http://localhost:3035/search', { params: { query: searchTerm } })