import axios from 'axios'

const request = axios.create({
    baseUrl: 'http://toutiao.itheima.net'
})

export default request
