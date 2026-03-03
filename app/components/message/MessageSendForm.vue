<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useForm, Field as VeeField } from 'vee-validate';
import { toast } from 'vue-sonner';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group';

const { t } = useI18n({
  useScope: 'global',
});

const { handleSubmit, isSubmitting, resetForm, setErrors } = useForm({
  initialValues: {
    content: '',
    email: '',
    name: '',
  },
  validationSchema: toTypedSchema(StoreMessageBodySchema),
});

const buttonText = computed(() =>
  isSubmitting.value
    ? t('messages.store.form.cta.loadingText')
    : t('messages.store.form.cta.text')
);

const { error, execute, message } = await useStoreMessage();

const createMessageHandler = handleSubmit(async values => {
  await execute(values);

  if (error.value !== undefined) {
    setErrors(error.value.data);
    toast.error(error.value.message);
  } else {
    toast.success(message.value!);
    setTimeout(() => {
      resetForm();
    }, 3000);
  }
});
</script>

<template>
  <Card class="border-highlight w-full border-4 sm:max-w-md">
    <CardHeader>
      <CardTitle class="bg-move text-lg">
        {{ $t('messages.store.form.title') }}
      </CardTitle>
    </CardHeader>

    <CardContent>
      <form
        id="message-store"
        action="/api/messages"
        method="POST"
        @submit="createMessageHandler"
      >
        <FieldGroup>
          <VeeField v-slot="{ field, errors }" name="name">
            <Field :data-invalid="!!errors.length">
              <FieldLabel for="name">
                {{ $t('messages.store.form.name.label') }}
              </FieldLabel>
              <Input
                id="name"
                v-bind="field"
                :placeholder="$t('messages.store.form.name.placeholder')"
                :aria-invalid="!!errors.length"
              />
              <FieldError v-if="errors.length" :errors="errors" />
            </Field>
          </VeeField>

          <VeeField v-slot="{ field, errors }" name="email">
            <Field :data-invalid="!!errors.length">
              <FieldLabel for="email">
                {{ $t('messages.store.form.email.label') }}
              </FieldLabel>
              <Input
                id="email"
                v-bind="field"
                type="email"
                :placeholder="$t('messages.store.form.email.placeholder')"
                :aria-invalid="!!errors.length"
              />
              <FieldError v-if="errors.length" :errors="errors" />
            </Field>
          </VeeField>

          <VeeField v-slot="{ field, errors }" name="phoneNumber">
            <Field :data-invalid="!!errors.length">
              <FieldLabel for="phoneNumber">
                {{ $t('messages.store.form.phoneNumber.label') }}
              </FieldLabel>
              <Input
                id="phoneNumber"
                v-bind="field"
                :placeholder="$t('messages.store.form.phoneNumber.placeholder')"
                :aria-invalid="!!errors.length"
              />
              <FieldError v-if="errors.length" :errors="errors" />
            </Field>
          </VeeField>

          <VeeField v-slot="{ field, errors }" name="content">
            <Field :data-invalid="!!errors.length">
              <FieldLabel for="content">
                {{ $t('messages.store.form.content.label') }}
              </FieldLabel>
              <InputGroup>
                <InputGroupTextarea
                  id="content"
                  v-bind="field"
                  :placeholder="t('messages.store.form.content.placeholder')"
                  :rows="6"
                  class="min-h-24 resize-none"
                  :aria-invalid="!!errors.length"
                />
                <InputGroupAddon align="block-end">
                  <InputGroupText class="tabular-nums">
                    {{ field.value?.length || 0 }}/20000 char
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <FieldError v-if="errors.length" :errors="errors" />
            </Field>
          </VeeField>
        </FieldGroup>
      </form>
    </CardContent>
    <CardFooter>
      <Field orientation="horizontal">
        <Button type="submit" form="message-store">
          <Icon name="mdi:send" size="1rem" />
          {{ buttonText }}
        </Button>
      </Field>
    </CardFooter>
  </Card>
</template>
