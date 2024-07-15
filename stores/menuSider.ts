export const useMenuSiderStore = defineStore("menuSider", () => {
  const isShown = ref(false);

  const show = () => {
    isShown.value = true;
  };

  const hide = () => {
    isShown.value = false;
  };

  const toggle = () => {
    isShown.value = !isShown.value;
  };

  return {
    isShown,
    show,
    hide,
    toggle,
  };
});
