import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080"
});

// Responsável por pegar requisição e setar configurações.
api.interceptors.request.use(async config => {
  return config;
});

// Responsável por responder requisição após configuração, sem isso a requisição não teria resposta visivel.
api.interceptors.response.use( async response => {
  return response;
}, error => {
  return Promise.reject(error);
});

export default api;