import axios from 'axios';

let BASE_API_URL = 'http://127.0.0.1:9080'

export const loginUser = async (pEmail, pPassword) => {
    const response = await axios.post(`${BASE_API_URL}/v1/users/login`, {
        email: pEmail,
        password: pPassword
    }, 
    {
        headers: {
           // 'x-access-token': '',
            'Content-Type': 'application/json'
        },
        json: true
    });

    return response;
};


export const registerUser = (email, name, username, password) => {

};