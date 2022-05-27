import axios from 'axios';
import generateConfig from '../config';

const config = generateConfig();


const http = axios.create({ baseURL: config.baseURL });

export default http;