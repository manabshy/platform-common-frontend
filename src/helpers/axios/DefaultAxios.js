import axios from "axios"

let DefaultAxios = axios.create()

DefaultAxios.defaults.baseURL = "/api/"
DefaultAxios.defaults.method = "POST"

export default DefaultAxios
