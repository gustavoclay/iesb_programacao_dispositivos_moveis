import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/gustavoclay/json-server-test'
})

export default Api
