const jwt = require('jsonwebtoken');
const config = require('../../config/api.config');
const decoder = require('jwt-decode');

const encryptBearerToken = async () => {

};

const decryptBearerToken = async () => {

};

const signBearerToken = async (userId) => {
    var token = await jwt.sign({ id: userId }, config.secret, {
        expiresIn: 604800, // expires in 7 days
        algorithm: 'HS256'
    });
    return token;
};

const verifyBearerToken = async (authToken) => {
    var checkedToken = await jwt.verify(authToken, config.secret, (err, decoded) => {
        if (err) throw err;
        return decoded;
      });
    return checkedToken;
};

module.exports = {signBearerToken, verifyBearerToken}