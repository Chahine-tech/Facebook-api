import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CredentialsDto } from './dto/credentials.dto';
import { PrismaService } from '../database/services/prisma.service';
import { UsersService } from 'src/users/users.service';
import { hash, compare } from 'bcryptjs';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class AuthenticationService {
  constructor(private readonly prisma: PrismaService, private readonly usersService: UsersService) { }

  async passwordMatching(newPassword: string, realPassword: string) {
    return await compare(
      newPassword,
      realPassword
    );
  }

  async login(credentialsDto: CredentialsDto) {
    const { email, id, password } = await this.prisma.user.findUnique({ where: { email: credentialsDto.email } });
    const passwordMatch = await this.passwordMatching(credentialsDto.password, password);
    if (!passwordMatch) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    return { token: jwt.sign({ id }, process.env.secret), user: { email, id } };
  }

  async register({ email, password }: CredentialsDto) {
    const hashPassword = await hash(password, 10);
    return this.usersService.create(email, hashPassword)
  }

}