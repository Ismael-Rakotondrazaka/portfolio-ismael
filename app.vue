<template>
  <div class="bg-sky-50">
    <TheHeader />

    <h1 class="text-red-600 text-xl bg-red-600/10 text-center">Ismael</h1>

    <div>
      <form>
        <select v-model="locale">
          <option value="en">en</option>
          <option value="fr">fr</option>
        </select>
        <p>{{ $t("welcome") }}</p>
      </form>
    </div>

    <ButtonUI> Lorem, ipsum dolor. </ButtonUI>

    <ButtonUI variant="outlined"> Lorem, ipsum dolor. </ButtonUI>

    <AvatarUI class="w-full h-full max-w-[20rem] max-h-[20rem]" />

    <CustomInput
      id="name"
      label="Name :"
      placeholder="Your name"
      :modelValue="name"
      @update:modelValue="(newValue) => (name = newValue)"
    />

    <p class="text-primary bg-secondary">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa vero
      repellendus expedita temporibus quisquam consequuntur odit pariatur unde
      aspernatur ratione!
    </p>

    <h2 class="text-primary text-xl font-bold">Lorem, ipsum dolor.</h2>
  </div>
</template>

<script setup>
const { locale } = useI18n();

const name = ref("");
</script>
