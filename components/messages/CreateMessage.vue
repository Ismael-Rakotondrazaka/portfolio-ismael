<template>
  <div class="rounded-lg border-4 border-secondary bg-sky-100 p-3">
    <n-h2 v-t="'messages.store.form.title'" class="bg-move text-primary" />

    <form action="" method="POST" @submit.prevent="createMessageHandler">
      <CustomInput
        id="name"
        v-model:value="name"
        :label="$t('messages.store.form.name.label')"
        :placeholder="$t('messages.store.form.name.placeholder')"
        v-bind="nameProps"
      />

      <CustomInput
        id="email"
        v-model:value="email"
        :label="$t('messages.store.form.email.label')"
        type="email"
        :placeholder="$t('messages.store.form.email.placeholder')"
        v-bind="emailProps"
      />

      <CustomInput
        id="phoneNumber"
        v-model:value="phoneNumber"
        :label="$t('messages.store.form.phoneNumber.label')"
        type="string"
        :placeholder="$t('messages.store.form.phoneNumber.placeholder')"
        v-bind="phoneNumberProps"
      />

      <CustomTextArea
        id="content"
        v-bind="contentProps"
        v-model:value="content"
        :label="$t('messages.store.form.content.label')"
        :placeholder="t('messages.store.form.content.placeholder')"
      />

      <div class="flex flex-row justify-end">
        <ButtonUI type="submit" class="mt-7">
          <Icon name="mdi:send" class="mr-3" />
          {{ buttonText }}
        </ButtonUI>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n({
  useScope: "global",
});

const { handleSubmit, defineField, isSubmitting, setErrors, resetForm } =
  useForm({
    validationSchema: toTypedSchema(StoreMessageBodySchema),
    initialValues: {
      content: "",
      email: "",
      name: "",
    },
  });

const [name, nameProps] = defineField("name", makeFormFieldProps<string>);
const [email, emailProps] = defineField("email", makeFormFieldProps<string>);
const [phoneNumber, phoneNumberProps] = defineField(
  "phoneNumber",
  makeFormFieldProps<string>,
);
const [content, contentProps] = defineField(
  "content",
  makeFormFieldProps<string>,
);

const buttonText = computed(() =>
  isSubmitting.value
    ? t("messages.store.form.cta.loadingText")
    : t("messages.store.form.cta.text"),
);

const { message, error, execute } = await useStoreMessage();

const messagePusher = useMessage();

const createMessageHandler = handleSubmit(async (values) => {
  await execute(values);

  if (error.value !== null) {
    setErrors(error.value.data);
    messagePusher.error(error.value.message);
  } else {
    resetForm();
    messagePusher.success(message.value!);
  }
});
</script>

<style scoped></style>
