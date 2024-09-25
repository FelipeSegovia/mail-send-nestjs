import { Module } from '@nestjs/common';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MailModule,
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
