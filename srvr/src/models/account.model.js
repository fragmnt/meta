// knex model for Account `accounts` mysql2 table

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