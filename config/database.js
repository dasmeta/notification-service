module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        host: env("DATABASE_HOST"),
        port: env("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        username: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        uri: env("DATABASE_URL"),
        autoIndex: false,
      },
      options: {
        authenticationDatabase: env("DATABASE_NAME"),
        autoIndex: false,
      }
    }
  }
});
