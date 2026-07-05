<template>
  <li class="">
    <Card>
      <CardHeader>
        <CardTitle>
          <h2 class="text-primary inline-block text-xl font-bold">
            {{ company.name }}
          </h2>
          &nbsp;
          <NuxtLink
            :to="company.website"
            target="_blank"
            :external="true"
            class="text-primary font-light hover:underline"
          >
            {{ company.website }}
          </NuxtLink>
        </CardTitle>

        <CardDescription>
          <p class="text-highlight text-base font-bold">
            {{ post }}
          </p>
        </CardDescription>

        <CardAction>
          <p
            class="inline-block rounded-full border border-slate-300 bg-slate-200 p-1 px-3 text-sm whitespace-nowrap text-black"
          >
            {{ period }}
          </p>
        </CardAction>
      </CardHeader>

      <CardContent>
        <p class="text-primary text-base">
          {{ description }}
        </p>
      </CardContent>

      <CardFooter>
        <TechnoList :technos="technos" />
      </CardFooter>
    </Card>
  </li>
</template>

<script lang="ts" setup>
defineProps<{
  company: {
    name: string;
    website: string;
  };
  description: string;
  period: string;
  post: string;
  technos: string[];
}>();
</script>

<style scoped></style>
