module.exports = {
  apps: [
    {
      name: "api-pointofsale",
      script: "src/app.js",
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
        DB_USER: "database_user",
        DB_NAME: "databasename_db",
        DB_HOST: "localhost",
        DB_PASS: "password",
        DATABASE_URL: "",
        JWT_SECRET: "secretkey"
      }
    }
  ]
};
