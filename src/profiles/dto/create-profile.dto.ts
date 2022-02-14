import {IsNotEmpty } from 'class-validator';

export class CreateProfileDto {
  @IsNotEmpty()
  message: string;

  @IsNotEmpty()
  author: string;
}
