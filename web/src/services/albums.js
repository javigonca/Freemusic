import http from "./base-api";

const list = () => http.get("/albums")
.then((res) => res.data);

const detail = (id) => http.get(`/albums/${id}`)
.then((res) => res.data);

export default {
  list,
  detail,
}
