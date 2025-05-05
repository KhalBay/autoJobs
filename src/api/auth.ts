import { httpClient } from "../modules/httpClient"

export default {
  getToken: (data) => httpClient.post(`/token`, data),
}