const bcrypt = require('bcrypt');
const salt = 15;

const obsfcPswd = async (pswd) => {
    var hshed = await bcrypt.hash(pswd, salt).then(async (hsh) => {
        return hsh;
    }).catch((err) => {
         if(err)throw err;
    });
    
    return hshed;
};

const chkObsfc = (dbPswd, inputPswd) => {
     
};

module.exports = {obsfcPswd, chkObsfc};