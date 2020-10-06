import axios from 'axios'
const instance = axios.create({
    baseURL:'https://clone-5cb0c.firebaseio.com'
})
export default instance