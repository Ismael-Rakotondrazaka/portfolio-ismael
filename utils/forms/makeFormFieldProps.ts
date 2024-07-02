import { type PublicPathState } from "vee-validate";

export const makeFormFieldProps = <T>(state: PublicPathState<T>) => ({
  props: {
    validationStatus: state.errors[0] ? ("error" as const) : undefined,
    feedback: state.errors[0],
  },
});
