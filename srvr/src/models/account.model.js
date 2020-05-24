// knex model for Account `accounts` mysql2 table

const {signBearerToken, verifyBearerToken} = require('../lib/utils/jwt');
const decode_token = require('jwt-decode');

const getToken = async () => {
   var signed =  await signBearerToken("qfetti");
    console.log(signed);
    var decoded = decode_token(signed);
    console.log(decoded);
}

const checkToken = async () => {
    var checked = await verifyBearerToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InFmZXR0aSIsImlhdCI6MTU5MDI5ODYwNSwiZXhwIjoxNTkwOTAzNDA1fQ.91aYTTG3O7tJixo3zIR9_IsGTcOIS-KvfcDXNt_DN1Q");
    console.log(checked)
}

// getToken();
checkToken();