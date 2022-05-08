const UsersModel = require('../../../models/Users');

const allUsers = async () => {    
   const result = await UsersModel
      .find()
      .lean()
      .sort()
      .exec();

   if (result) {
      return result;
   } else {
      return [];
   }
};

const userLogin = async (root, args) => {
   const {
      cedula
   } = args.data;

   const loginUser = await UsersModel
      .findOne({
         cedula
      })
      .lean();

   if (loginUser) {
      return loginUser;
   } else {
      return null;
   }
};

module.exports = {
   allUsers,
   userLogin
};