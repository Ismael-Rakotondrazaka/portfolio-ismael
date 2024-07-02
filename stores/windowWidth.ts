import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

export const useWindowWidthStore = defineStore("windowWidth", () => {
  const breakpoints = useBreakpoints(breakpointsTailwind);

  const isMobileOrTablet = breakpoints.smallerOrEqual("lg");

  return {
    isMobileOrTablet,
  };
});
