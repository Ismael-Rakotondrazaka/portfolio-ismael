export const EmailTemplate = {
  CONTACT: 'CONTACT',
  CONTACTED_ACKNOWLEDGEMENT: 'CONTACTED_ACKNOWLEDGEMENT',
} as const;

export type EmailTemplate = keyof typeof EmailTemplate;

export const EmailTemplateBrevoId: Record<EmailTemplate, number> = {
  CONTACT: 2,
  CONTACTED_ACKNOWLEDGEMENT: 1,
};

export interface EmailSendResult {
  error?: string;
  messageId?: string;
  sentAt: Date;
  success: boolean;
}
