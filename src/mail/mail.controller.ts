import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Logger,
  Post,
} from '@nestjs/common';
import { MailService } from './mail.service';
import { CreateMailDto } from './dto/create-mail.dto';

@Controller('mail')
export class MailController {
  private readonly logger = new Logger('MailController');

  constructor(private readonly mailService: MailService) {}

  @HttpCode(HttpStatus.OK)
  @Post('send')
  async sendMail(
    @Body() createMail: CreateMailDto,
  ): Promise<{ transaction: boolean }> {
    await this.mailService.testEmail(createMail);
    return { transaction: true };
  }
}
