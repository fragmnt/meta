# Generating passwords with Bcrypt 

#### For Authentication

Get password from `./src/lib/utils/obfs.js`:

```
const {obsfcPswd, chkObsfc} = require('../lib/utils/obfs');

const hashPassword = async () => {

    var pswdString = "soosdfosdfodsfodsof";
    var cookie = await obsfcPswd(pswdString);
    console.log(cookie);
    var isNotSamePswd = await chkObsfc("assasas", cookie);
    var isSamePswd = await chkObsfc(pswdString, cookie);
    console.log(isNotSamePswd, isSamePswd);
};


hashPassword();
```

---

## Generating API tokens with JsonWebTokens as Bearer Authorization Tokens

#### For Authorization: 

Get (authToken, refreshToken) from `./src/lib/utils/jwt.js`:

```
const {generateBearerToken} = require('../lib/utils/jwt');
const jwt_decode = require('jwt-decode');

const generateAuthToken = async () => {
    var usernameString = "qfetti";
    var authJwt = await generateBearerToken(usernameString);
    console.log(authJwt);
    var decoded = jwt_decode(authJwt);
    console.log(decoded); 
    // perhaps i should base64 encode the userId string
};

generateAuthToken();
```

use as `Authorization: Bearer ${token}` header in request to the API.

_reference_: https://github.com/fastify/fastify-bearer-auth