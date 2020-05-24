require('dotenv').config();

const axios = require('axios');

var appToken = process.env.MARQETA_APPLICATION_TOKEN;
var accessToken = process.env.MARQETA_MASTER_ACCESS_TOKEN;
var sandboxUrl = process.env.MARQETA_SANDBOX_BASE_URL;

const getUsers = async () => {
    await axios.post(`${sandboxUrl}/users`,
    {
        first_name: 'E', 
        last_name: 'L',
        active: true
    },
    {
    headers: {
        'Content-type': 'application/json',
    },
    auth: {
        username: `${appToken}`,
        password: `${accessToken}`
    },
    json: true
}).then((resp) => {
    console.log(resp.data);
    return resp.data;
}).catch((err) => {
    console.log(err);
    return err;
});
};

getUsers();
