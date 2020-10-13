import axios from "axios"

const instance = axios.create({
    baseURL: 'local host address',
});

export default instance