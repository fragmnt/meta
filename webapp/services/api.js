import axios from 'axios';

let api = process.env.apiUrl;

export const loginUser = async (pEmail, pPassword) => {
    try {
    const response = await axios.post(`${api}/v1/users/login`, {
        email: pEmail,
        password: pPassword
    }, 
    {
        headers: {
            'Content-Type': 'application/json'
        },
        json: true
    });

    return response;

} catch (err) {
    console.log(err);
}
};

export const registerUser = async (pEmail, pNickname, pUsername, pPassword) => {
    const response = await axios.post(`${api}/v1/users/register`, {
        email: pEmail,
        password: pPassword,
        username: pUsername,
        nickname: pNickname,
    }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        json: true
    });

    return response;

};

export const getAllUsersFromMarqeta = async () => {
    const response = await axios.get(`${api}/v1/mrq/users`, {}, {
        headers: {
            'x-access-token': localStorage.getItem('token') ? localStorage.getItem('token') : null,
            'Content-Type': 'application/json'
        },
        json: true
    });

    return response;
}