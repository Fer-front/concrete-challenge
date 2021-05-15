import axios from 'axios'
import qs from 'qs'

import handleResponse from '../repositories/handleResponse'


const gitHub = axios.create({
    baseURL: 'https://api.github.com',
    headers: { 'Content-Type': 'application/json' },
    paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
})

gitHub.interceptors.request.use(async (config) => {
    config.headers = {
        ...config.headers,
        // tokem de altenticacao
    }
    return config
})

gitHub.interceptors.response.use(
    (res) => ( console.log('interceptor success ===> ', handleResponse(res))),
    (error) => ( console.log('interceptor error ===> ', handleResponse(error.response)))
)

export default gitHub


  