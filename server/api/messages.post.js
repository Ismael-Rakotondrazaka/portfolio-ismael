import {
  validateName,
  validateMessage,
  validateEmail,
  sendEmail,
} from "~/utils";

export default defineEventHandler(async (event) => {
  const { emailDefaultReceiver, emailDefaultSubject, isServiceAvailable } =
    useRuntimeConfig();

  if (isServiceAvailable === "YES") {
    const body = await readBody(event);

    const name = validateName(body.name);
    const message = validateMessage(body.message);
    const emailSender = validateEmail(body.email);

    await sendEmail({
      from: emailSender,
      to: emailDefaultReceiver,
      subject: emailDefaultSubject,
      text: `Initiated by ${name}.\nMessage:\n${message}`,
    });

    return {
      message: {
        en: "Your message has been successfully sent.",
        fr: "Votre message a été envoyé avec succès.",
      },
    };
  } else {
    throw createError({
      status: 503,
      message: {
        en: "Sorry, the service is not available.",
        fr: "Désolé, le service n'est pas disponible.",
      },
    });
  }
});
