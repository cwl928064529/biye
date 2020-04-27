import * as axios from '../../router'

export function getRsaPublicKeyApi (param) {
    return axios.get(requestUrl.getRsaPublicKeyUrl, param, {showLoading: false})
}