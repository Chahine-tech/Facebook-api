import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/services/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }

  create(email: string, password: string) {
    return this.prisma.user.create({ data: { email: email, password: password } });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findUnique(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({ where });
  }
  findOne(id: string) {
    this.prisma.profile.findUnique({ where: { userId: id } });
  }

  updateProfile(id: number, updateUserDto: UpdateUserDto) {
    this.prisma.profile.update({ where: { id }, data: updateUserDto });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
