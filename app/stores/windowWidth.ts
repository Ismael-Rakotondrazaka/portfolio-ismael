import { useWindowSize } from '@vueuse/core';

export const useWindowWidthStore = defineStore('windowWidth', () => {
  const { width } = useWindowSize();
  const isMobileOrTablet = computed(() => width.value <= 1280);

  return {
    isMobileOrTablet,
  };
});
