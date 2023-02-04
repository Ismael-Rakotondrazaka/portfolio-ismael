<template>
  <div class="p-3 border-4 rounded-lg bg-sky-100 border-primary group">
    <h2
      class="inline-block transition-colors text-secondary text-2xl font-bold mb-5 after:w-0 after:h-[0.15rem] after:transition-all after:bg-primary after:block group-hover:after:w-full bg-move"
    >
      You can send me a message here
    </h2>

    <form @submit.prevent="createMessageHandler" action="" method="POST">
      <SuccessPresenter :success="success" class="mb-5" />

      <FatalErrorPresenter :error="fatalError" class="mb-5" />

      <CustomInput
        label="Name:"
        id="name"
        placeholder="John Smith"
        :modelValue="name"
        @update:modelValue="(newValue) => (name = newValue)"
        :error="errors.name"
      />

      <CustomInput
        label="Email:"
        id="email"
        type="email"
        placeholder="email@example.com"
        :modelValue="email"
        @update:modelValue="(newValue) => (email = newValue)"
        :error="errors.email"
      />

      <label for="message" class="inline-block mb-1">Message:</label>
      <div class="mb-5">
        <textarea
          name="content"
          v-model="message"
          id="message"
          cols=""
          rows=""
          placeholder="Your message"
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
        <ButtonUI type="submit">
          <FaIcon icon="fa-solid fa-paper-plane" class="mr-3" />
          {{ buttonText }}
        </ButtonUI>
      </div>
    </form>
  </div>
</template>

<script setup>
import { watch } from "vue";
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
    errors.value.name = "The name is required.";
  } else if (trimmed.length > maxLength) {
    errors.value.name = `The name is too long (${maxLength} characters is the maximum allowed). Please try again.`;
  } else {
    errors.value.name = null;
  }
};
const emailChangeHandler = (newValue) => {
  fatalError.value = null;
  success.value = null;

  const trimmed = newValue.trim();

  if (trimmed.length === 0) {
    errors.value.email = "The email is required.";
  } else if (
    !/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g.test(
      trimmed
    )
  ) {
    errors.value.email = "The email is not valid. Please try again.";
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
    errors.value.message = "The message is required.";
  } else if (trimmed.length > maxLength) {
    errors.value.message = `The message is too long (${maxLength} characters is the maximum allowed). Please try again.`;
  } else {
    errors.value.message = null;
  }
};

const createMessageProcessing = ref(false);

const buttonText = computed(() =>
  createMessageProcessing.value ? "Sending..." : "Send"
);

const resetData = () => {
  name.value = "";
  email.value = "";
  success.value;
  message.value = "";

  // errors will be there but overwrite it here
  errors.value = {
    email: null,
    message: null,
    name: null,
  };
};

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
          fetchError?.value ||
          new Error(`Something is not working properly. Please try again.`);
      } else {
        success.value = responseData.value.message;

        // remove the success message and resetData after a few time
        setTimeout(() => {
          success.value = null;
          resetData();
        }, 10000);
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
