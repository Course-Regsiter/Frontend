const axios = require('axios');

const callApi_User = (method, path, data, jwt, params={}, options={}) => {
    const headers = {
        Authorization : `Bearer ${jwt}`
    }
    
    const baseUrl = 'http://192.168.1.10:31933/api';
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

const callApi_Course = (method, path, data, jwt, params={}, options={}) => {
    const headers = {
        Authorization : `Bearer ${jwt}`
    }
    
    const baseUrl = 'http://192.168.1.10:31552/api';
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
    createAccount : (form) => callApi_User('post', '/user/register', form),
    login : (form) => callApi_User('post', '/user/login', form, null, null, { withCredentials : true }),
    logout : () => callApi_User('get', '/user/logout', null, null, null, { withCredentials : true }),

    getCurrentUser : (jwt) => callApi_User('get', '/auth/check', null, jwt, null, { withCredentials : true }),

    // Port : 4000 (Course)
    getAllCourse : (jwt) => callApi_Course('get', '/course', null, jwt),

    getUserCourse : (jwt) => callApi_Course('get', '/user/course', null, jwt),
    postUserCourse : (jwt, data) => callApi_Course('post', '/user/course', data, jwt),
    deleteUserCourse : (jwt, cid) => callApi_Course('delete', `/user/course/${cid}`, null, jwt),

    getUserPreCourse : (jwt) => callApi_Course('get', '/user/preCourse', null, jwt),
    postUserPreCourse : (jwt, data) => callApi_Course('post', '/user/preCourse', data, jwt),
    deleteUserPreCourse : (jwt, cid) => callApi_Course('delete', `/user/preCourse/${cid}`, null, jwt),

}