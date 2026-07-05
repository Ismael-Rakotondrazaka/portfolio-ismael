import { logger } from '../loggers/logger';
import type { RecaptchaVerificationResult } from './recaptcha.type';

const RECAPTCHA_VERIFY_URL =
  'https://www.google.com/recaptcha/api/siteverify';
const RECAPTCHA_MIN_SCORE = 0.5;

type GoogleRecaptchaSiteVerifyResponse = {
  'error-codes'?: string[];
  score?: number;
  success: boolean;
};

export async function verifyRecaptchaToken(
  token: string
): Promise<RecaptchaVerificationResult> {
  const config = useRuntimeConfig();

  try {
    const response = await $fetch<GoogleRecaptchaSiteVerifyResponse>(
      RECAPTCHA_VERIFY_URL,
      {
        body: new URLSearchParams({
          response: token,
          secret: config.recaptchaSecretKey,
        }),
        method: 'POST',
      }
    );

    const success =
      response.success && (response.score ?? 1) >= RECAPTCHA_MIN_SCORE;

    if (!success) {
      logger.warn(
        {
          errorCodes: response['error-codes'],
          event: 'recaptcha.verification.rejected',
          score: response.score,
          success: response.success,
        },
        'reCAPTCHA verification rejected'
      );
    }

    return { score: response.score, success };
  } catch (error) {
    logger.error(
      { err: error, event: 'recaptcha.verification.error' },
      'reCAPTCHA verification request failed'
    );

    return { success: false };
  }
}
