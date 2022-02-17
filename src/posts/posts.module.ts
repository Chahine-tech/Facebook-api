import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { DatabaseModule } from '../database/database.module';
import {UsersModule} from '../users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
