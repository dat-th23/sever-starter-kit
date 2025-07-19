import { Module } from "@nestjs/common";
import { DBCheckService } from "./db-check.service";
import { DbCheckController } from "./db-check.controller";

@Module({
    providers: [DBCheckService],
    controllers: [DbCheckController],
    exports: [DBCheckService],
})
export class DatabaseModule {}