const axios = require('axios');

const callApi = (method, path, data, jwt, params={}, options={}) => {
    const headers = {
        Authorization : `Bearer ${jwt}`
    }
    
    const baseUrl = "http://localhost:4000/api";
    const fullUrl = `${baseUrl}${path}`;
    const config = {
        method,
        url : fullUrl,
        headers,
        params,
        data,
        ...options
    }

    return axios(config);
}

export default {
    createAccount : (form) => callApi('post', '/user/register', form),
    login : (form) => callApi('post', '/user/login', form, null, null, { withCredentials : true }),
    logout : () => callApi('get', '/user/logout', null, null, null, { withCredentials : true }),

    getCurrentUser : (jwt) => callApi('get', '/auth/check', null, jwt, null, { withCredentials : true })
}