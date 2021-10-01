module.exports = {
    HOST: 'localhost',
    USER: 'admin',
    PASSWORD: 'demoUser1',
    DB: 'primary',
    dialect: 'postgres',
    pool: {
        max: 3,
        min: 0,
        acquire: 50000,
        idle: 10000
    }
}