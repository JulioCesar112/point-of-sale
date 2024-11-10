//? Middlaware para proteger rutas 
//* 1- Revisar si eiste un token
//* 2- Verificar si el token pertenece a un usuario valido 
//* 3- Modificar el req y
//* agregar req.user con la informacion desencriptada del token


const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const config = require("../config/env");
const userController = require("../controllers/userController");

module.exports = (passport) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: config.jwtsecret,
  };

  passport.use(
    new JwtStrategy(options, async (jwtPayload, done) => {
      try {
        const user = await userController.getUserById(jwtPayload.id);
        if (!user) {
          return done(null, false, { message: 'User not found' });
        }
        return done(null, jwtPayload);
      } catch (error) {
        console.error('Error verifying JWT:', error);
        return done(error, false);
      }
    })
  );
};


