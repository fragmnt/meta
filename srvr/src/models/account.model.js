// knex model for Account `accounts` mysql2 table

const {obsfcPswd} = require('../lib/utils/obfs');

const hashPassword = async () => {

    var cookie = await obsfcPswd("soosdfosdfodsfodsof");
    console.log(cookie);
};

hashPassword();