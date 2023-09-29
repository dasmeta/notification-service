module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        host: env("DATABASE_HOST", undefined),
        port: env("DATABASE_PORT", 27017),
        database: env("DATABASE_NAME", undefined),
        username: env("DATABASE_USERNAME", undefined),
        password: env("DATABASE_PASSWORD", undefined),
        uri: env("DATABASE_URL"),
        autoIndex: false,
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', undefined),
        ssl: env.bool('DATABASE_SSL', undefined),
      }
    }
  }
});
