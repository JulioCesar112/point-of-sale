module.exports = {
  apps: [
    {
      name: "api-pointofsale",
      script: "src/app.js",
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
        DB_USER: "pointofsale_user",
        DB_NAME: "pointofsale_db",
        DB_HOST: "localhost",
        DB_PASS: "kQtN~QM%3nbXp+VQFJ$",
        DATABASE_URL: "",
        JWT_SECRET: "kQtN~QM%3nbXp+VQFJ$"
      }
    }
  ]
};
