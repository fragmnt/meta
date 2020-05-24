const bcrypt = require('bcrypt');
const salt = 15;

const obsfcPswd = async (pswd) => {
    var hshed = await bcrypt.hash(pswd, salt).then(async (hsh) => {
        return hsh;
    }).catch((err) => {
        if (err) throw err;
    });
    
    return hshed;
};

const chkObsfc = async (inputPswd, dbPswd) => {
    var chkdResult = await bcrypt.compare(inputPswd, dbPswd).then(async (result) => {
        return result;
    }).catch((err) => {
        if (err) throw err;
    });

    return chkdResult;
};

module.exports = {obsfcPswd, chkObsfc};