<template>
  <main class="min-h-screen">
    <TheWelcome />

    <TheAbout />

    <TheSkills />

    <TheProjects />

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

    <p class="text-primary bg-secondary">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa vero
      repellendus expedita temporibus quisquam consequuntur odit pariatur unde
      aspernatur ratione!
    </p>

    <h2 class="text-primary text-xl font-bold">Lorem, ipsum dolor.</h2>
  </main>
</template>

<script setup>
const { locale } = useI18n();
</script>

<style lang="scss" scoped></style>
