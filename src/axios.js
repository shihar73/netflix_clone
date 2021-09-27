import axios from 'axios';
import {baseUrl} from './Constanse/constanse'

const instance = axios.create({
    baseURL: baseUrl,
    
  });

  export default instance