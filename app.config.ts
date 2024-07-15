import type { ModuleOptions as NaiveUiOptions } from "@bg-dev/nuxt-naiveui";
import { generateColorThemes } from "@bg-dev/nuxt-naiveui/utils";

const themes = generateColorThemes({
  primary: "#002451",
});

export default defineAppConfig({
  naiveui: {
    themeConfig: {
      dark: themes.dark,
      light: themes.light,
    },
  } satisfies Partial<NaiveUiOptions>,
});
