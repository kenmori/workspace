module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'kenjimorita',
  password: 'password',
  database: 'postgres',
  autoLoadEntities: true,
  entities: ['dist/entities/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
};
