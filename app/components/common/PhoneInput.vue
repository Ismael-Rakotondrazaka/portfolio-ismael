<template>
  <div class="h-full w-full">
    <PhoneInput_
      no-use-browser-locale
      fetch-country
      class="flex"
      :country-locale="countryLocale"
      placeholder="+33 06 00 00 00 00"
      @update="updateValue"
    >
      <template #selector="{ inputValue, updateInputValue, countries }">
        <Popover v-model:open="open">
          <PopoverTrigger>
            <Button
              variant="outline"
              class="flex gap-1 rounded-s-lg rounded-e-none px-3"
            >
              <FlagComponent :country="inputValue ?? ''" />
              <ChevronsUpDown class="-mr-2 h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent class="w-75 p-0">
            <Command>
              <CommandInput :placeholder="$t('common.search.country')" />
              <CommandEmpty>{{ $t('common.empty.noCountry') }}</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  <CommandItem
                    v-for="option in countries"
                    :key="option.iso2"
                    :value="option.name"
                    class="gap-2"
                    @select="
                      () => {
                        updateInputValue(option.iso2);
                        open = false;
                        focused = true;
                      }
                    "
                  >
                    <FlagComponent :country="option?.iso2 ?? ''" />
                    <span class="flex-1 text-sm">{{ option.name }}</span>
                    <span class="text-foreground/50 text-sm">{{
                      option.dialCode
                    }}</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </template>
      <template #input="{ inputValue, updateInputValue, placeholder }">
        <Input
          ref="phoneInput"
          class="rounded-s-none rounded-e-lg"
          type="text"
          :model-value="inputValue"
          :placeholder="placeholder"
          :aria-invalid="ariaInvalid"
          @input="updateInputValue"
        />
      </template>
    </PhoneInput_>
  </div>
</template>

<script lang="ts" setup>
import { ChevronsUpDown } from '@lucide/vue';
import { useFocus } from '@vueuse/core';
import PhoneInput_ from 'base-vue-phone-input';
import type {
  CountryCallingCode,
  CountryCode,
  NationalNumber,
  PhoneNumberType,
} from 'libphonenumber-js';

import { Button } from '~/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '~/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover';

interface Props {
  ariaInvalid?: 'false' | 'true' | boolean;
}

defineProps<Props>();

// const value = defineModel<string>('value');

type Emit = {
  'onUpdate:modelValue': [value: string];
};
const emit = defineEmits<Emit>();

type Results = {
  countryCallingCode?: CountryCallingCode;
  countryCode?: CountryCode;
  e164?: string;
  formatInternational?: string;
  formatNational?: string;
  isPossible?: boolean;
  isValid: boolean;
  nationalNumber?: NationalNumber;
  rfc3966?: string;
  type?: PhoneNumberType;
  uri?: string;
};

const { locale } = useI18n();

const countryLocale = computed(() =>
  locale.value === 'fr' ? 'fr-FR' : 'en-GB'
);

const open = ref<boolean>(false);
const phoneInput = ref<HTMLInputElement | null>(null);
const { focused } = useFocus(phoneInput);

const updateValue = (newValue: Results) => {
  emit('onUpdate:modelValue', newValue.formatInternational ?? '');
};
</script>
