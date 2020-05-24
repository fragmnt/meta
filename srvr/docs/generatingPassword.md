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

const {signBearerToken, verifyBearerToken} = require('../lib/utils/jwt');
const decode_token = require('jwt-decode');

const getToken = async () => {
   var signed =  await signBearerToken("qfetti");
    console.log(signed);
    var decoded = decode_token(signed);
    console.log(decoded);
}

const checkToken = async () => {
    var checked = await verifyBearerToken("");
    console.log(checked)
}

getToken();
checkToken();
```

use as `Authorization: Bearer ${token}` header in request to the API.

_reference_: https://github.com/fastify/fastify-bearer-auth


---
