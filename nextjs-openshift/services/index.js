import axios from "axios";

const facade = {};

const api = axios.create({ baseURL: "http://localhost:8080/api" });

facade.request = config => api.request(config);

["get", "head"].forEach(async method => {
  facade[method] = async (url, config) => await facade.request({ ...config, method, url });
});

["delete", "post", "put", "patch"].forEach(method => {
  facade[method] = async (url, data, config) => await facade.request({ ...config, method, url, data });
});

export const cms = async () =>{
    return await facade.get('/cms');
}

export const signup = async (user,password,name) =>{
    return await facade.post('/users/signup',{user:user,password:password,name:name});
}

export const signin = async (user,password) =>{
    return await facade.post('/users/signin',{user:user,password:password});
}
export const forgetpassword = async (email) =>{
    return await facade.post('/users/forgetpassword',{email: email});
}

export const activate = async (key,token) =>{
    const config = { headers: { Authorization: "Bearer " + token }};
    return await facade.post('/users/activate', {key:key}, config);
}

export const signout = async (token) =>{
    const config = { headers: { Authorization: "Bearer " + token }};
    return await facade.post('/users/signout',{},config);
}
export const remove = async (token) =>{
    const config = { headers: { Authorization: "Bearer " + token }};
    return await facade.post('/users/remove',{key:key},config);
}

export const list_users = async (token) =>{
    const config = { headers: { Authorization: "Bearer " + token }};
    return await facade.get("/users",{},config);
}
