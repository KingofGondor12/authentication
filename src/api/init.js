import axios from 'axios';

const api = axios.create({
  baseURL: 'https://authentication-backend.herokuapp.com/'
})

const setJwt = (token) => {
  localStorage.setItem('token', token)
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export { api, setJwt }
