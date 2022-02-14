import {IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  message: string;

  @IsNotEmpty()
  author: string;
}
