import xss from 'xss';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export abstract class Satinizer {
  public static satinize(input: string) {
    return xss(input);
  }
}
