import axios from 'axios'
const BASEURL = import.meta.env.VITE_APP_API_BASE_URL
const service = axios.create({
    baseURL: BASEURL,
    timeout: 50000
})
service.interceptors.request.use(
    config => {
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    response => {
        return response
    },
    function (error) {
        return Promise.reject(error)
    }
)

export default service
