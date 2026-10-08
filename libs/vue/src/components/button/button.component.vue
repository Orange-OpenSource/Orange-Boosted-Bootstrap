<script setup lang="ts">
import { ButtonProps } from './button.model';
import { computed, useId } from 'vue';

const props = withDefaults(defineProps<ButtonProps>(), {
    variant: 'default',
    type: 'button',
    isDisabled: false,
    isIconOnly: false,
    isLoading: false,
    isOnColoredBg: false,
    class: '',
});

const emit = defineEmits<{ click: [] }>();

const statusId = useId();

const buttonClasses = computed(() => [
    'btn',
    props.variant && `btn-${props.variant}`,
    props.isIconOnly && 'btn-icon',
    props.isOnColoredBg && 'btn-on-colored-bg',
    props.isLoading && 'loading-indeterminate',
    props.class,
]);

const isButtonDisabled = computed(() => props.isDisabled || props.isLoading);

const loadingStatusText = computed(() =>
    props.isLoading ? props.loadingLabel || props.label || '' : '',
);

const handleClick = () => {
    if (!isButtonDisabled.value) emit('click');
};
</script>

<template>
    <button
        :class="buttonClasses"
        :type="type"
        :aria-label="defaultAriaLabel"
        :disabled="isButtonDisabled"
        :form="formId"
        @click="handleClick"
    >
        <slot name="icon" />
        <template v-if="label && !isIconOnly">{{ label }}</template>
        <span v-if="isIconOnly && label" class="visually-hidden">{{
            label
        }}</span>
        <slot />
        <svg
            viewBox="0 0 40 40"
            xmlns="http://www.w3.org/2000/svg"
            class="loader"
            aria-hidden="true"
        >
            <circle class="loader-inner" cx="20" cy="20" r="17" />
        </svg>
        <span
            role="status"
            :id="statusId"
            :class="['visually-hidden', { 'd-none': !isLoading }]"
            >{{ loadingStatusText }}</span
        >
    </button>
</template>
