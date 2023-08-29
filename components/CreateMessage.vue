<template>
  <div class="p-3 border-4 rounded-lg bg-sky-100 border-primary group">
    <h2
      v-t="'createMessageTitle'"
      class="inline-block transition-colors text-secondary text-2xl font-bold mb-5 after:w-0 after:h-[0.15rem] after:transition-all after:bg-primary after:block group-hover:after:w-full bg-move"
    />

    <form @submit.prevent="createMessageHandler" action="" method="POST">
      <SuccessPresenter :success="success" class="mb-5" />

      <FatalErrorPresenter :error="fatalError" class="mb-5" />

      <CustomInput
        :label="t('nameLabel')"
        id="name"
        :placeholder="t('namePlaceholder')"
        :modelValue="name"
        @update:modelValue="(newValue) => (name = newValue)"
        :error="errors.name"
      />

      <CustomInput
        :label="t('emailLabel')"
        id="email"
        type="email"
        :placeholder="t('emailPlaceholder')"
        :modelValue="email"
        @update:modelValue="(newValue) => (email = newValue)"
        :error="errors.email"
      />

      <label v-t="'messageLabel'" for="message" class="inline-block mb-1" />
      <div class="mb-5">
        <textarea
          name="message"
          v-model="message"
          id="message"
          cols=""
          rows=""
          :placeholder="t('messagePlaceholder')"
          class="block w-full h-full p-3 text-black border-2 rounded-md outline-none resize-none border-secondary focus:border-primary"
          :class="[
            {
              '!border-red-500': errors.message,
            },
          ]"
        ></textarea>
        <ErrorPresenter :error="errors.message" />
      </div>

      <div class="flex flex-row justify-end">
        <button type="submit" class="mt-7 inline-block px-5 py-3 font-bold uppercase border-2 rounded-md border-secondary ring-2 transition-all after:w-0 after:h-[0.15rem] after:transition-all after:!bg-primary after:block hover:after:w-full text-white !bg-secondary hover:border-white ring-secondary">
          <FaIcon icon="fa-solid fa-paper-plane" class="mr-3" />
          {{ buttonText }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { watch } from "vue";

const { t, locale } = useI18n({
  useScope: "global",
  messages: {
    en: {
      createMessageTitle: "You can send me a message here",
      nameLabel: "Name:",
      namePlaceholder: "Your name",
      emailLabel: "Email:",
      emailPlaceholder: "youremail\u0040example.com",
      messageLabel: "Message:",
      messagePlaceholder: "You message",
      nameRequired: "The name is required.",
      nameLong:
        "The name is too long ({count} characters is the maximum allowed). Please try again.",
      emailRequired: "The email is required.",
      emailInvalid: "The email is not valid. Please try again.",
      messageRequired: "The message is required.",
      messageLong:
        "The message is too long ({count} characters is the maximum allowed). Please try again.",
      sendMessageButtonText: "Send",
      sendingMessageButtonText: "Sending...",
      defaultErrorMessage:
        "Something is not working properly. Please try again.",
    },
    fr: {
      createMessageTitle: "Vous pouvez m'envoyer un message ici",
      nameLabel: "Nome :",
      namePlaceholder: "Votre nom",
      emailLabel: "Email:",
      emailPlaceholder: "votreemail\u0040exemple.com",
      messageLabel: "Message:",
      messagePlaceholder: "Votre message",
      nameRequired: "Le nom is obligatoire.",
      nameLong:
        "Le nom est trop long ({count} caractères est le maximum autorisé). Veuillez réessayer.",
      emailRequired: "L'email est obligatoire.",
      emailInvalid: "L'email n'est pas valide. Veuillez réessayer.",
      messageRequired: "Le message est obligatoire",
      messageLong:
        "Le message est trop long ({count} caractères est le maximum autorisé). Veuillez réessayer.",
      sendMessageButtonText: "Envoyer",
      sendingMessageButtonText: "En cours...",
      defaultErrorMessage:
        "Quelque chose ne fonctionne pas correctement. Veuillez réessayer.",
    },
  },
});

const name = ref("");
const email = ref("");
const message = ref("");

const errors = ref({
  email: null,
  message: null,
  name: null,
});

const fatalError = ref(null);
const success = ref(null);

const hasError = computed(() =>
  Object.values(errors.value).every((val) => !!val)
);

// ! Do not change the three main ref inside those functions
const nameChangeHandler = (newValue) => {
  fatalError.value = null;
  success.value = null;

  const maxLength = 100;
  let trimmed = newValue.trim().replace(/\s+/g, "");

  if (trimmed.length === 0) {
    errors.value.name = t("nameRequired");
  } else if (trimmed.length > maxLength) {
    errors.value.name = t("nameLong", {
      count: maxLength,
    });
  } else {
    errors.value.name = null;
  }
};
const emailChangeHandler = (newValue) => {
  fatalError.value = null;
  success.value = null;

  const trimmed = newValue.trim();

  if (trimmed.length === 0) {
    errors.value.email = t("emailRequired");
  } else if (
    !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g.test(
      trimmed
    )
  ) {
    errors.value.email = t("emailInvalid");
  } else {
    errors.value.email = null;
  }
};
const messageChangeHandler = (newValue) => {
  fatalError.value = null;
  success.value = null;

  const trimmed = newValue.trim();
  const maxLength = 2000;

  if (trimmed.length === 0) {
    errors.value.message = t("messageRequired");
  } else if (trimmed.length > maxLength) {
    errors.value.message = t("messageLong", {
      count: maxLength,
    });
  } else {
    errors.value.message = null;
  }
};

const createMessageProcessing = ref(false);

const buttonText = computed(() =>
  createMessageProcessing.value
    ? t("sendingMessageButtonText")
    : t("sendMessageButtonText")
);

const createMessageHandler = async () => {
  // recheck because we don't want the watcher to be immediate
  nameChangeHandler(name.value);
  emailChangeHandler(email.value);
  messageChangeHandler(message.value);

  if (!hasError.value && !createMessageProcessing.value) {
    try {
      createMessageProcessing.value = true;
      fatalError.value = null;
      success.value = null;

      const data = {
        name: name.value.trim().replace(/\s+/g, ""),
        email: email.value.trim(),
        message: message.value.trim(),
      };

      const { data: responseData, error: fetchError } = await useFetch(
        "/api/messages",
        {
          method: "POST",
          body: data,
        }
      );

      if (fetchError.value) {
        fatalError.value =
          fetchError?.value || new Error(t("defaultErrorMessage"));
      } else {
        success.value = responseData.value.message[locale.value];
      }

      createMessageProcessing.value = false;
    } catch (error) {
      createMessageProcessing.value = false;
      fatalError.value = error;
    }
  }
};

// watch changes but not set to immediate
watch(name, nameChangeHandler);
watch(email, emailChangeHandler);
watch(message, messageChangeHandler);
</script>

<style scoped></style>
