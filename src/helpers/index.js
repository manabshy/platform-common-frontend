/******************************************************************************************************/
// Imports
/******************************************************************************************************/
import { getAccessStatus, getUserData } from "./auth/Auth"
import Axios from "./axios/"
import { getHttpHeader, getHttpJSON } from "./http/Http"
/******************************************************************************************************/
// Exports
/******************************************************************************************************/
const Helpers = {
  Auth: {
    getAccessStatus,
    getUserData
  },
  Axios,
  Http: {
    getHttpHeader,
    getHttpJSON
  }
}

export default Helpers
