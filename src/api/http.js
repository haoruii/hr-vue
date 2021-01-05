// 封装axios
import axios from 'axios'

// 对于axios响应结果的处理封装（响应拦截器）
axios.interceptors.response.use((ret) => {
    // 短路运算符
    return ret.data || ret
})


// 对于axios请求的处理封装（请求拦截器）
// axios.interceptors.request.use((cfg) => {

// })



export default axios