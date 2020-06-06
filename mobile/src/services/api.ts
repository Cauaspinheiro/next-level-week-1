import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.100.25:3001',
});
