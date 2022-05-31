import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configValidationSchema } from './config.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT'), 10),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        // entities: [User],
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        // We are using migrations, synchronize should be set to false.
        synchronize: false,
        requestTimeout: 50000,
        keepConnectionAlive: true,
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
          encrypt: true, //for dev false
        },
        extra: {
          // for dev not included...
          trustServerCertificate: true,
          Encrypt: true,
          IntegratedSecurity: false,
          SSL: true,
        },
      }),
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mssql',
    //   host: 'localhost',
    //   port: 1433,
    //   username: 'sa',
    //   password: 'admin',
    //   database: 'task-management',
    //   // entities: [User],
    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   // We are using migrations, synchronize should be set to false.
    //   synchronize: false,
    //   requestTimeout: 50000,
    //   keepConnectionAlive: true,
    //   // you can disable this if you prefer running migration manually.
    //   migrationsRun: false,
    //   logging: true,
    //   logger: 'file',
    //   // allow both start:prod and start:dev to use migrations
    //   // __dirname is either dist or src folder, meaning either
    //   // the compiled js in prod or the ts in dev
    //   migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    //   cli: {
    //     migrationsDir: 'src/migrations',
    //   },
    //   options: {
    //     encrypt: true, //for dev false
    //   },
    //   extra: {
    //     // for dev not included...
    //     trustServerCertificate: true,
    //     Encrypt: true,
    //     IntegratedSecurity: false,
    //     SSL: true,
    //   },
    // }),

    TasksModule,

    AuthModule,
  ],
})
export class AppModule {}
