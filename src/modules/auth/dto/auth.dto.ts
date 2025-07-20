import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";

export class RegisterDto {
    @ApiProperty({ example: 'ngva@gmail.com', description: 'User email address' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: 'Nguyen Van A', description: 'fullname'})
    @IsString()
    name: string;

    @ApiProperty({ example: '123456', minLength: 6 })
    @IsString()
    @MinLength(6)
    password: string;
}

export class LoginDto {
    @ApiProperty({ example: 'ngva@gmail.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: '123456' })
    @IsString()
    password: string;
}