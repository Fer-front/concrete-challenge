import axios from 'axios'
import qs from 'qs'

import handleResponse from '../../../utils/handleResponse'


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
    (res) => (handleResponse(res)),
    (error) => (handleResponse(error.response))
)

export default gitHub


  