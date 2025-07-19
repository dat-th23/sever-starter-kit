import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";

export class RegisterDto {
    @ApiProperty({ example: 'user@example.com', description: 'User email address' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: '123456', minLength: 6 })
    @IsString()
    @MinLength(6)
    password: string;
}

export class LoginDto {
    @ApiProperty({ example: 'admin@gmail.com' })
    @IsEmail()
    email: string;

    @ApiProperty({ example: '123456' })
    @IsString()
    password: string;
}