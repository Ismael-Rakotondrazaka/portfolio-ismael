import { Satinizer } from "../strings";
import { EmailLayoutFormatter } from "./emailLayoutFormatter";
import { EmailSender } from "./emailSender";

export class MessageEmail {
  public static sendToInformation(arg: {
    email: string;
    content: string;
    name: string;
  }) {
    const { email, name, content } = arg;
    const runtimeConfig = useRuntimeConfig();

    const informationEmail: string = runtimeConfig.public
      .informationEmail as string;

    return EmailSender.send({
      text: `From ${Satinizer.satinize(name)},\n${Satinizer.satinize(content)}`,
      from: email,
      subject: "Message via portfolio",
      to: informationEmail,
    });
  }

  public static sendAcknowledgment(arg: { email: string; name: string }) {
    const { email, name } = arg;
    const runtimeConfig = useRuntimeConfig();

    const informationPhoneNumber: string = runtimeConfig.public
      .informationPhoneNumber as string;
    const informationEmail: string = runtimeConfig.public
      .informationEmail as string;

    const receiverName: string = Satinizer.satinize(name);

    return EmailSender.send({
      from: informationEmail,
      to: email,
      subject: "Merci de m'avoir contacté(e) !",
      html: EmailLayoutFormatter.format({
        body: `<h2 style="color:#000">Merci de m'avoir contacté(e) !</h2><p style="font-size:11pt;font-family:sans-serif;color:#000">Bonjour ${receiverName},<br>Merci de m'avoir contacté via mon portfolio ! Ceci est une réponse automatique pour vous informer que j'ai bien reçu votre message et que je vais l'examiner sous peu.</p><p style="font-size:11pt;font-family:sans-serif;color:#000">Si votre demande est urgente, n'hésitez pas à me contacter directement à <a href="mailto:${informationPhoneNumber}" style="color:#0563c1">${informationPhoneNumber}</a>. Sinon, je vous répondrai dès que possible.</p><p style="font-size:11pt;font-family:sans-serif;color:#000">Merci de votre intérêt.</p><p style="font-size:11pt;font-family:sans-serif;color:#000">Bien cordialement,</p>`,
        title: "Merci de m'avoir contacté(e) !",
      }),
    });
  }
}
