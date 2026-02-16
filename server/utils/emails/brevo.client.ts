import { BrevoClient } from '@getbrevo/brevo';

let brevoInstance: BrevoClient | null = null;

export function useBrevo() {
  if (!brevoInstance) {
    const config = useRuntimeConfig();

    brevoInstance = new BrevoClient({
      apiKey: config.brevoSmtpKey,
    });
  }

  return brevoInstance;
}
