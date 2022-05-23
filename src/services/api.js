import axios from 'axios'

const api_key = '8656c898799cd49a7cc57b562841e45f'
const api = axios.create ({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: `${api_key}`
    }
})

export default api