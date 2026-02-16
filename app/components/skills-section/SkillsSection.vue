<template>
  <div id="skills" class="relative min-h-screen py-20">
    <div class="absolute top-[1%] left-[10%] w-7 md:w-12 lg:w-20">
      <Icon
        name="mdi:star"
        class="text-highlight text-3xl hover:animate-spin md:text-5xl"
      />
    </div>

    <div class="absolute top-[40%] right-[10%] w-7 md:w-12 lg:w-20">
      <Icon
        name="mdi:code-tags"
        class="text-highlight text-3xl hover:animate-spin md:text-5xl"
      />
    </div>

    <div class="absolute bottom-0 left-[3%] w-7 md:w-12 lg:w-20">
      <Icon
        name="mdi:card-account-details"
        class="text-highlight text-3xl hover:animate-ping md:text-5xl"
      />
    </div>

    <div class="mx-auto w-full max-w-5xl">
      <h1 class="text-gold mb-5 inline-block text-2xl font-bold">
        {{ $t('skills.title') }}
      </h1>
    </div>

    <div class="mx-auto mb-10 w-full max-w-5xl">
      <h2 class="bg-primary text-gold mb-0 px-3 py-5 text-xl font-bold">
        {{ $t('skills.technicalSkills.title') }}
      </h2>

      <div class="">
        <div
          v-for="(skillGroup, i) in technicalSkills"
          :key="i"
          class="bg-secondary odd:bg-opacity-10 even:bg-opacity-20 px-3! py-5! pt-2"
        >
          <h3 class="text-primary mb-2 text-xl font-bold">
            {{ skillGroup.title }}
          </h3>

          <TechSkillList :skills="skillGroup.skills" />
        </div>
      </div>
    </div>

    <div class="mx-auto w-full max-w-5xl">
      <h2 class="bg-primary text-gold mb-0 px-3 py-5 text-xl font-bold">
        {{ $t('skills.softSkills.title') }}
      </h2>

      <div
        v-for="(skill, i) in softSkills"
        :key="i"
        class="bg-secondary odd:bg-opacity-10 even:bg-opacity-20 px-3 pt-2 pb-5"
      >
        <h3 class="text-primary mb-2 text-xl font-bold">
          {{ skill.title }}
        </h3>

        <p class="text-primary text-base whitespace-pre-wrap">
          {{ skill.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import databases from '~/assets/data/databases.json';
import frameworksLibraries from '~/assets/data/frameworksLibraries.json';
import programmingLanguages from '~/assets/data/programmingLanguages.json';
import toolsExtra from '~/assets/data/toolsExtra.json';

const { rt, t, tm } = useI18n({
  useScope: 'global',
});

const technicalSkills = computed(
  (): {
    skills: TechSkill[];
    title: string;
  }[] => [
    {
      skills: programmingLanguages as TechSkill[],
      title: t('skills.technicalSkills.programmingLanguages.title'),
    },
    {
      skills: frameworksLibraries as TechSkill[],
      title: t('skills.technicalSkills.frameworksLibraries.title'),
    },
    {
      skills: databases as TechSkill[],
      title: t('skills.technicalSkills.databases.title'),
    },
    {
      skills: toolsExtra as TechSkill[],
      title: t('skills.technicalSkills.toolsExtra.title'),
    },
  ]
);

const softSkills = computed<SoftSkill[]>(() => {
  const skillList = tm('skills.softSkills.list') as SoftSkill[];

  return skillList.map(skill => ({
    description: rt(skill.description),
    title: rt(skill.title),
  }));
});
</script>
