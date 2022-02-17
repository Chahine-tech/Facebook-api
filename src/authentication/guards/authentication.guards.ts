import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { UsersService } from '../../users/users.service';

@Injectable()
export class JwtGuard implements CanActivate {
    constructor(private readonly usersService: UsersService) { }

    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        const { authorization: token } = request.headers;
        if (!token) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);;

        const payload = jwt.verify(token, process.env.secret);
        const user = await this.usersService.findUnique({ id: payload['id'] });

        if (!user) return false;

        return true;
    }
}