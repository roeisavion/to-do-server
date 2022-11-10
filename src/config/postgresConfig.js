export const postgresConfig = {
    user: process.env.POSTGRES_USER ||'postgres',
    host: process.env.POSTGRES_HOST ||'localhost',
    database: process.env.POSTGRES_DB ||'Todos',
    password: process.env.POSTGRES_PASSWORD ||'password',
    port: process.env.POSTGRES_PORT ||5432,
};
