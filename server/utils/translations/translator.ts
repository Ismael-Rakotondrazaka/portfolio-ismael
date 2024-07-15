import {
  useTranslation,
  type useTranslation as IUseTranslation,
} from "@intlify/h3";
import type { EventHandlerRequest, H3Event } from "h3";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - Type instantiation is excessively deep and possibly infinite.
type TranslationFunction = Awaited<ReturnType<typeof IUseTranslation>>;
// @ts-check

// eslint-disable-next-line no-unused-vars
type DateFunction = (date: Date) => string;

export class Translator {
  readonly t: TranslationFunction;
  readonly d: DateFunction;

  private constructor(t_: TranslationFunction, d_: DateFunction) {
    this.t = t_;
    this.d = d_;
  }

  public static async new(
    event: H3Event<EventHandlerRequest>,
  ): Promise<Translator> {
    const t = await useTranslation(event);

    // TODO create a real date formatter
    const d = (date: Date) => date.toISOString();

    return new Translator(t, d);
  }
}
