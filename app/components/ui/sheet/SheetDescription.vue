<script setup lang="ts">
import { reactiveOmit } from '@vueuse/core';
import type { DialogDescriptionProps } from 'reka-ui';
import { DialogDescription } from 'reka-ui';
import type { HTMLAttributes } from 'vue';

import { cn } from '@/lib/utils';

const props = defineProps<
  { class?: HTMLAttributes['class'] } & DialogDescriptionProps
>();

const delegatedProps = reactiveOmit(props, 'class');
</script>

<template>
  <DialogDescription
    data-slot="sheet-description"
    :class="cn('text-muted-foreground text-sm', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogDescription>
</template>
