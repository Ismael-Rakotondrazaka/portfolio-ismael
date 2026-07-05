import type { RecaptchaVerificationResult } from './recaptcha.type';

const RECAPTCHA_VERIFY_URL =
  'https://www.google.com/recaptcha/api/siteverify';
const RECAPTCHA_MIN_SCORE = 0.5;

type GoogleRecaptchaSiteVerifyResponse = {
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

    return {
      score: response.score,
      success: response.success && (response.score ?? 1) >= RECAPTCHA_MIN_SCORE,
    };
  } catch {
    return { success: false };
  }
}
