
import axios from "axios";

/**
 * Funcion encargada de recuperar posts
 * @returns {*}
 */
export function getPosts(){
    const apiToken = localStorage.getItem("hdApiToken");
    const config = {
        method: 'get',
        url: 'https://three-points.herokuapp.com/api/posts',
        timeout: 3000,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiToken
        }
    };

    return axios(config);


}

/**
 * Funcion encargada de recuperar perfil
 * @returns {*}
 */
export function getProfile(){
    const apiToken = localStorage.getItem("hdApiToken");
    const config = {
        method: 'get',
        url: 'https://three-points.herokuapp.com/api/users/6136944fcd79ba24707e2f82',
        timeout: 3000,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiToken
        }
    };

    return axios(config);


}
/**
 * Funcion encargada de dar like a un post
 * @param id
 * @returns {*}
 */
export function setLike(id){
    const apiToken = localStorage.getItem("hdApiToken");
    const config = {
        method: 'post',
        url: 'https://three-points.herokuapp.com/api/posts/' +id +'/like',
        timeout: 3000,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + apiToken
        }
    };

    return axios(config);


}


/**
 * Funcion encargada de realizar login
 * @param email
 * @param password
 * @returns {*}
 */
export function login(email, password){
    const data = JSON.stringify({
        "password": password,
        "username": email
    });

    const config = {
        method: 'post',
        url: 'https://three-points.herokuapp.com/api/login',
        timeout: 2000,
        headers: {
            'Content-Type': 'application/json'
        },
        data : data
    };

    return axios(config);


}
