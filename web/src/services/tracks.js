import http from './base-api';

const list = () => {
  return http.get('/tracks')
    .then((res) => res.data)


}

export default {
  list
}
