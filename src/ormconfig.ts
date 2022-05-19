import { ConnectionOptions } from 'typeorm';

// You can load you .env file here synchronously using dotenv package (not installed here),
// import * as dotenv from 'dotenv';
// import * as fs from 'fs';
// const environment = process.env.NODE_ENV || 'development';
// const data: any = dotenv.parse(fs.readFileSync(`.env.stage.dev`));
// You can also make a singleton service that load and expose the .env file content.
// ...

// Check typeORM documentation for more information.
const config: ConnectionOptions = {
    type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: 'admin',
      database: 'task-management',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    requestTimeout: 500000,

    // We are using migrations, synchronize should be set to false.
    synchronize: false,

    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    migrationsRun: false,
    logging: true,
    logger: 'file',

    // allow both start:prod and start:dev to use migrations
    // __dirname is either dist or src folder, meaning either
    // the compiled js in prod or the ts in dev
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    },
    options: {
        encrypt: true,
        useUTC: true
    },

    extra: { // for dev not included...
        trustServerCertificate: true,
        
        Encrypt: true,
        IntegratedSecurity: false,
        SSL: true,
        keepConnectionAlive: true,
    }
};

export = config;