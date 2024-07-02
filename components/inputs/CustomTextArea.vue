<template>
  <div class="mb-5">
    <label v-if="label" :for="id" class="mb-1 inline-block">
      {{ label }}
    </label>

    <textarea
      :id="id"
      v-model="value"
      :name="id"
      :placeholder="placeholder"
      class="block h-full min-h-40 w-full rounded-md border-2 border-secondary p-3 text-black outline-none focus:border-primary"
      :class="[
        {
          '!border-red-500': validationStatus === 'error',
        },
      ]"
    ></textarea>

    <FeedbackPresenter :feedback="feedback" :status="validationStatus" />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  label?: string;
  placeholder?: string;
  type?: string;
  id: string;
  feedback?: string;
  validationStatus?: "error";
}

withDefaults(defineProps<Props>(), {
  label: undefined,
  placeholder: "",
  type: "text",
  feedback: undefined,
  validationStatus: undefined,
});

const value = defineModel<string>("value", {
  required: false,
});
</script>

<style></style>
