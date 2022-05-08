const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

// const User = require('../models/Users');

const { client } = require('../graphql/gql');
const { 
   LOGIN_USER 
} = require('../graphql/querys/query');

const {
   matchPassword
} = require('../security/encrytion');

passport.use('local.login', new localStrategy({
   usernameField: 'username',
   passwordField: 'password',
   passReqToCallback: true,
   // session: false
}, async (req, username, password, done) => {

   // Confirmar si coincide el username
   // const user = await User
   //    .findOne({
   //       cedula
   //    });

   const { data: user } = await client
      .query(LOGIN_USER, { 
         cedula: username,
         password
      })
      .toPromise();

   console.log(user);
   
   if (!user) {
      // return done(null, false, { message: 'Usuario y/o contraseña no existentes...'});
      return done(null, false, { message: 'Usuario y/o contraseña incorrectas...'});
   } else {
      // Validar la contraseña
      // const passLog = await user.matchPassword(password);
      const passLog = await matchPassword(password, user.userLogin.password);
      console.log(passLog);

      if (passLog) {
         // console.log(user);
         // if (user.estado == 'Disabled') {
         if (user.userLogin.estado == 'Disabled') {
            return done(null, false, { message: '¡Usuario desactivado! Comuniquese con el administrador del sitema...'});
         } else {
            return done(null, user);
         }
      } else {
         return done(null, false, { message: 'Usuario y/o contraseña incorrectas...'});
      }
   }
}));

passport
   .serializeUser((user, done) => {
   // console.log(user);
      // done(null, user.id);
      done(null, user.userLogin.cedula);
   });

passport
   .deserializeUser(async (cedula, done) => {
      // await User.findById(id, (err, user) => {
      //    done(err, user);
      // });

      const { data } = await client
         .query(LOGIN_USER, { 
            cedula
         })
         .toPromise();

      done(null, data.userLogin);
   });