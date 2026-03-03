import type { Brevo } from '@getbrevo/brevo';

import type { EmailSendResult } from './email.type';

import { useBrevo } from './brevo.client';
import { EmailTemplate, EmailTemplateBrevoId } from './email.type';

export type ContactData = {
  content: string;
  email: string;
  name: string;
  phoneNumber: string;
};

export type ContactedAcknowledgementData = {
  email: string;
  name: string;
};

export type SendBrevoTemplateOptions = {
  params?: Record<string, boolean | number | string | undefined>;
  template: EmailTemplate;
  to: { email: string; name?: string };
};

export async function sendBrevoTemplateEmail(
  options: SendBrevoTemplateOptions
): Promise<EmailSendResult> {
  const { params, template, to } = options;
  const sentAt = new Date();

  const templateId = EmailTemplateBrevoId[template];

  const request: Brevo.SendTransacEmailRequest = {
    templateId,
    to: [{ email: to.email, name: to.name ?? to.email }],
  };

  if (params && Object.keys(params).length > 0) {
    const filteredParams: Record<string, boolean | number | string> = {};
    for (const [k, v] of Object.entries(params)) {
      if (v !== undefined && v !== null)
        filteredParams[k] = v as boolean | number | string;
    }
    if (Object.keys(filteredParams).length > 0) request.params = filteredParams;
  }

  request.params = {
    ...(request.params ?? {}),
    source: 'mon portfolio',
  };

  try {
    const result =
      await useBrevo().transactionalEmails.sendTransacEmail(request);

    return {
      messageId: result.messageId,
      sentAt,
      success: true,
    };
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : 'Failed to send email';
    return {
      error: errorMsg,
      sentAt,
      success: false,
    };
  }
}

export async function sendContactedAcknowledgementEmail(
  data: ContactedAcknowledgementData
): Promise<EmailSendResult> {
  return sendBrevoTemplateEmail({
    params: { name: data.name },
    template: EmailTemplate.CONTACTED_ACKNOWLEDGEMENT,
    to: { email: data.email, name: data.name },
  });
}

export async function sendContactEmail(
  data: ContactData
): Promise<EmailSendResult> {
  const config = useRuntimeConfig();

  return sendBrevoTemplateEmail({
    params: {
      content: data.content.trim(),
      email: data.email.trim(),
      name: data.name.trim(),
      phoneNumber: data.phoneNumber.trim(),
      sentAt: new Date().toISOString(),
    },
    template: EmailTemplate.CONTACT,
    to: {
      email: config.public.contactEmail,
      name: config.public.contactFullName,
    },
  });
}
