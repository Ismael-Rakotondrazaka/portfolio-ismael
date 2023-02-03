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
      message: "Your message has been successfully sent.",
    };
  } else {
    throw createError({
      status: 503,
      message: "Sorry, the service is not available.",
    });
  }
});
