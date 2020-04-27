export const option = {
    showLoading: false,
    errorHandler: true // 是否默认处理错误请求 true: 默认处理，false: 自己处理
}

export const requestUrl = {
    logoutUrl: '/api-user/login/off', // 退出
    loginUrl: '/api-user/login/interior', //登录
    sourceUserInfo: '/api-user/cas/sso/getUmInfo',
    getRsaPublicKeyUrl: '/api-user/wechat/getRsaPublicKey', // 获取加密
}