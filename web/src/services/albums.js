import http from './base-api';

const list = () => {
  return http.get('/albums')
    .then((res) => res.data)
}

export default {
  list
}