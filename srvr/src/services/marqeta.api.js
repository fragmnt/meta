require('dotenv').config();

const axios = require('axios');

var appToken = process.env.MARQETA_APPLICATION_TOKEN;
var accessToken = process.env.MARQETA_MASTER_ACCESS_TOKEN;
var sandboxUrl = process.env.MARQETA_SANDBOX_BASE_URL;

module.exports = {

retrieveUser: async (firstName, lastName) => {
    await axios.post(`${sandboxUrl}/users`,
    {
        first_name: firstName, 
        last_name: lastName,
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
},

createNewUser: async () => {
    await axios.post(`${sandboxUrl}/users`, {
            "first_name": "Blue",
            "last_name": "Bird",
            "token": "bluebird_token",
            "email": "bluebird@gmail.com",
            "password": "My_passw0rd",
            "identifications": [
              {
                "type": "SSN",
                "value": "4444"
              }
            ],
            "birth_date": "1991-01-01",
            "address1": "1234 Blake Street",
            "city": "Berkeley",
            "state": "CA",
            "country": "USA",
            "postal_code": "94702",
            "phone": "5101111111",
            "gender": "M",
            "uses_parent_account": false,
            "metadata": {
                  "key1":"value1",
                  "key2":"value2"
            }
    }, {
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
},

getUsers: async () => {
    var resp = await axios.get(`${sandboxUrl}/users`, {  
         headers: {
        'Content-type': 'application/json',
    },
    auth: {
        username: `${appToken}`,
        password: `${accessToken}`
    },
    json: true});

    return resp;
},

}