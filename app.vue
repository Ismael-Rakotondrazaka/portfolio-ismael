<template>
  <div>
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
  </div>
</template>

<script setup>
const { locale } = useI18n();
</script>
