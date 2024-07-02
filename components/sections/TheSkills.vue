<template>
  <div id="skills" class="relative min-h-screen py-20">
    <div class="absolute left-[10%] top-[1%] w-7 md:w-12 lg:w-20">
      <Icon
        name="mdi:star"
        class="text-3xl text-secondary hover:animate-spin md:text-5xl"
      />
    </div>

    <div class="absolute right-[10%] top-[40%] w-7 md:w-12 lg:w-20">
      <Icon
        name="mdi:code-tags"
        class="text-3xl text-secondary hover:animate-spin md:text-5xl"
      />
    </div>

    <div class="absolute bottom-0 left-[3%] w-7 md:w-12 lg:w-20">
      <Icon
        name="mdi:card-account-details"
        class="text-3xl text-secondary hover:animate-ping md:text-5xl"
      />
    </div>

    <div class="mx-auto w-full max-w-5xl">
      <n-h1
        v-t="'skills.title'"
        align-text
        class="inline-block text-tertiary underline-slide"
      />
    </div>

    <div class="mx-auto mb-10 w-full max-w-5xl">
      <n-h2
        v-t="'skills.technicalSkills.title'"
        class="mb-0 bg-primary px-3 py-5 text-tertiary"
      />

      <n-list size="large" :bordered="false" class="">
        <n-list-item
          v-for="(skillGroup, i) in technicalSkills"
          :key="i"
          class="bg-secondary !px-3 !py-5 pt-2 odd:bg-opacity-10 even:bg-opacity-20"
        >
          <n-h3 class="text-primary">
            {{ skillGroup.title }}
          </n-h3>

          <TechSkillList :skills="skillGroup.skills" />
        </n-list-item>
      </n-list>
    </div>

    <div class="mx-auto w-full max-w-5xl">
      <n-h2
        v-t="'skills.softSkills.title'"
        class="mb-0 bg-primary px-3 py-5 text-tertiary"
      />

      <div
        v-for="(skill, i) in softSkills"
        :key="i"
        class="bg-secondary px-3 pb-5 pt-2 odd:bg-opacity-10 even:bg-opacity-20"
      >
        <n-h3 class="text-primary">
          {{ skill.title }}
        </n-h3>

        <p class="whitespace-pre-wrap text-primary">
          {{ skill.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import databases from "~/assets/data/databases.json";
import frameworksLibraries from "~/assets/data/frameworksLibraries.json";
import programmingLanguages from "~/assets/data/programmingLanguages.json";
import toolsExtra from "~/assets/data/toolsExtra.json";

const { t, rt, tm } = useI18n({
  useScope: "global",
});

const technicalSkills = computed(
  (): {
    title: string;
    skills: TechSkill[];
  }[] => [
    {
      title: t("skills.technicalSkills.programmingLanguages.title"),
      skills: programmingLanguages as TechSkill[],
    },
    {
      title: t("skills.technicalSkills.frameworksLibraries.title"),
      skills: frameworksLibraries as TechSkill[],
    },
    {
      title: t("skills.technicalSkills.databases.title"),
      skills: databases as TechSkill[],
    },
    {
      title: t("skills.technicalSkills.toolsExtra.title"),
      skills: toolsExtra as TechSkill[],
    },
  ],
);

const softSkills = computed<SoftSkill[]>(() => {
  const skillList = tm("skills.softSkills.list") as SoftSkill[];

  return skillList.map((skill) => ({
    title: rt(skill.title),
    description: rt(skill.description),
  }));
});
</script>
