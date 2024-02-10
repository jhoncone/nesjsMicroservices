import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '@nestjs-microservices/shared/dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.authService.createUser(createUserDto);
  }

  @Get('get')
  GetTest() {
    return "Test Works";
  }

  @Get()
  GetTests() {
    return "apigatewayTest Works";
  }
}
