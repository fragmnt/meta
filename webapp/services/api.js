import axios from 'axios';

axios.defaults.baseURL = process.env.apiUrl;

export const loginUser = async (pEmail, pPassword) => {
        const response = await axios.post('/v1/users/login', {
            email: pEmail,
            password: pPassword
        }, 
        {
            headers: {
                'Content-Type': 'application/json'
            },
            json: true
        }).catch((err) => {
            if (err.response.status == 400) {
                return err.response;
            }
        });

        return response;
};

export const registerUser = async (pEmail, pNickname, pUsername, pPassword) => {
    const response = await axios.post('/v1/users/register', {
        email: pEmail,
        password: pPassword,
        username: pUsername,
        nickname: pNickname,
    }, { 
        headers: {
            'Content-Type': 'application/json'
        },
        json: true
    }).catch((err) => {
        if (err.response.status == 409) {
            return err.response;
        }
    });


    return response;
};

export const getUserInformation = async () => {
    const response = await axios.get('/v1/account/info', {
        headers: {
            'X-Access-Token': localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        json: true
    });

    return response;
};

export const getAllUsersFromMarqeta = async () => {
    const response = await axios.get('/v1/mrq/users', {
        headers: {
            'X-Access-Token': localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        json: true
    });

    return response;
}