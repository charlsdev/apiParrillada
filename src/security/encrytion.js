const bcrypt = require('bcryptjs');

const encryptPassword = async (password) => {
   const salt = await bcrypt.genSalt(10);
   const hash = await bcrypt.hash(password, salt);
   return hash;
};

const matchPassword = async (password) => {
   try {
      return await bcrypt.compare(password, process.env.savedPassword);
   } catch (e) {
      console.log(e);
   }
};

module.exports = {
   encryptPassword,
   matchPassword
};