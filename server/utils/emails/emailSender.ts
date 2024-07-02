import { createTransport, type Transporter } from "nodemailer";
import type Mail from "nodemailer/lib/mailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

export abstract class EmailSender {
  private static transporter: Transporter<SMTPTransport.SentMessageInfo> | null =
    null;

  private static getTransporter(): Transporter<SMTPTransport.SentMessageInfo> {
    if (!this.transporter) {
      const runtimeConfig = useRuntimeConfig();

      this.transporter = createTransport({
        // @ts-expect-error @types/nodemailer is out of date
        host: runtimeConfig.smtpHost,
        port: runtimeConfig.smtpPort,
        secure: true,
        auth: {
          user: runtimeConfig.smtpUser,
          pass: runtimeConfig.smtpPassword,
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
    }

    return this.transporter;
  }

  public static send(arg: {
    from: string;
    to: string;
    subject: string;
    text?: string;
    html?: string;
    attachments?: Mail.Attachment[] | undefined;
  }): Promise<SMTPTransport.SentMessageInfo> {
    const { from, to, subject, text, html, attachments } = arg;

    const transporter = this.getTransporter();

    return transporter.sendMail({
      from,
      to,
      subject,
      text,
      html,
      attachments,
    });
  }
}
