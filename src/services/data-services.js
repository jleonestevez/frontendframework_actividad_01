
import axios from "axios";

export function getPosts(token){
    const config = {
        method: 'get',
        url: 'https://three-points.herokuapp.com/api/posts',
        timeout: 3000,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    };

    return axios(config);


}


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
