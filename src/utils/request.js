import axios from 'axios'
import { CODE_OK } from './config'

const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000
})

service.interceptors.request.use(config => {
  return config
}, err => {
  console.log(err)
  return Promise.reject(err)
})


service.interceptors.response.use(response => {
  const res = response.data
  if(res.code === CODE_OK) {
    return res
  }
  return Promise.reject('code码错误')
}, err => {
  console.log(err)
  return Promise.reject(err)
})

export default service