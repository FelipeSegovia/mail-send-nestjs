import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateMailDto } from './dto/create-mail.dto';

@Injectable()
export class MailService {
  private readonly logger = new Logger('MailService');

  constructor(private mailerService: MailerService) {}

  async testEmail({ email, message, name }: CreateMailDto): Promise<boolean> {
    const toEmails = ['serviciosloscolonos@gmail.com'];
    const template = './template-mail.hbs';

    try {
      await this.mailerService.sendMail({
        to: toEmails,
        template: template,
        subject: 'Alguien se quiere comunicar contigo',
        context: {
          name: name,
          email: email,
          message: message,
        },
      });

      return true;
    } catch (error) {
      throw new Error(error);
    }
  }
}
