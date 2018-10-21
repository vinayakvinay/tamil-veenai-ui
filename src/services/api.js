import axios from 'axios';

const post = (uri, body) => axios.post(uri, body)
const get = (uri, params) => axios.get(uri, {params})

export default { post, get };
