import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [UsersModule, PostsModule, AuthenticationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
