import xss from "xss";

export abstract class Satinizer {
  public static satinize(input: string) {
    return xss(input);
  }
}
