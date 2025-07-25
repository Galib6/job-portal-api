import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ENV } from "@src/env";
import { MigrationCommand } from "./commands/migration.command";
import { MigrationService } from "./services/migration.service";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: "postgres",
        autoLoadEntities: true,
        synchronize: false,
        port: ENV.defaultDatabase.port,
        username: ENV.defaultDatabase.user,
        password: ENV.defaultDatabase.password,
        host: ENV.defaultDatabase.host,
        database: ENV.defaultDatabase.databaseName,
        logging: ENV.defaultDatabase.logging,
        migrations: [__dirname + "/migrations/*{.ts,.js}"],
        migrationsTableName: "migrations",
        cli: {
          migrationsDir: "src/database/migrations",
        },
      }),
    }),
  ],
  providers: [MigrationService, MigrationCommand],
  exports: [MigrationService],
})
export class DatabaseModule {}
