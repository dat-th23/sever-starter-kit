import { Controller, Get } from "@nestjs/common";
import { DBCheckService } from "./db-check.service";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('db-check')
export class DbCheckController {
    constructor(private readonly dbCheckService: DBCheckService) {}

    @Get()
    @ApiOperation({ summary: 'Test connect to Database' })
    async check(){
        return this.dbCheckService.testConnection();
    }
 } 
