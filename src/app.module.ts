import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProfileModule } from './profiles/profile.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UsersModule, ProfileModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
