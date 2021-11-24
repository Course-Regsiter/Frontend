const axios = require('axios');

const callApi = (port, method, path, data, jwt, params={}, options={}) => {
    const headers = {
        Authorization : `Bearer ${jwt}`
    }
    
    const baseUrl = `http://localhost:${port}/api`;
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
    // Port : 4001 (User)
    createAccount : (form) => callApi(4001, 'post', '/user/register', form),
    login : (form) => callApi(4001, 'post', '/user/login', form, null, null, { withCredentials : true }),
    logout : () => callApi(4001, 'get', '/user/logout', null, null, null, { withCredentials : true }),

    getCurrentUser : (jwt) => callApi(4001, 'get', '/auth/check', null, jwt, null, { withCredentials : true }),

    // Port : 4000 (Course)
    getAllCourse : (jwt) => callApi(4000, 'get', '/course', null, jwt),

    getUserCourse : (jwt) => callApi(4000, 'get', '/user/course', null, jwt),
    postUserCourse : (jwt, data) => callApi(4000, 'post', '/user/course', data, jwt),
    deleteUserCourse : (jwt, cid) => callApi(4000, 'delete', `/user/course/${cid}`, null, jwt),

    getUserPreCourse : (jwt) => callApi(4000, 'get', '/user/preCourse', null, jwt),
    postUserPreCourse : (jwt, data) => callApi(4000, 'post', '/user/preCourse', data, jwt),
    deleteUserPreCourse : (jwt, cid) => callApi(4000, 'delete', `/user/preCourse/${cid}`, null, jwt),

}