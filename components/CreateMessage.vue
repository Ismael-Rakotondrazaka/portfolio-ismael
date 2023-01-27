<template>
  <div class="p-3 border-4 rounded-lg bg-sky-100 border-primary group">
    <h2
      class="inline-block transition-colors text-secondary text-2xl font-bold mb-5 after:w-0 after:h-[0.15rem] after:transition-all after:bg-primary after:block group-hover:after:w-full"
    >
      You can send me a message here
    </h2>

    <form @submit.prevent="" action="" method="POST">
      <CustomInput
        label="Name:"
        id="name"
        placeholder="John Smith"
        :modelValue="name"
        @update:modelValue="(newValue) => (name = newValue)"
      />

      <CustomInput
        label="Email:"
        id="name"
        type="email"
        placeholder="email@example.com"
        :modelValue="email"
        @update:modelValue="(newValue) => (email = newValue)"
      />

      <label for="message" class="inline-block mb-1">Message:</label>
      <textarea
        name="content"
        v-model="content"
        id="message"
        cols=""
        rows=""
        placeholder="Your message"
        class="block w-full h-full p-3 mb-5 text-black border-2 rounded-md outline-none resize-none border-secondary focus:border-primary"
      ></textarea>

      <div class="flex flex-row justify-end">
        <ButtonUI type="submit">
          <FaIcon icon="fa-solid fa-paper-plane" class="mr-3"/>
          Send
        </ButtonUI>
      </div>
    </form>
  </div>
</template>

<script setup>
const name = ref("");
const email = ref("");
const content = ref("");
</script>

<style scoped></style>
