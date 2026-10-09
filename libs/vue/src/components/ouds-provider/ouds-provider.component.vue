<script setup lang="ts">
import { loadBrandCSS } from '@ouds/core';
import { computed, provide, reactive, watch } from 'vue';

import {
    OUDS_CONTEXT_KEY,
    type OudsProviderProps,
} from './ouds-provider.model';

const props = withDefaults(defineProps<OudsProviderProps>(), {
    theme: 'light',
    brand: 'orange',
    roundedButtons: false,
    roundedAlerts: false,
    roundedInputs: false,
});

// Reactive, read-only view of the props for descendants (see `useOuds`).
provide(
    OUDS_CONTEXT_KEY,
    reactive({
        theme: computed(() => props.theme),
        brand: computed(() => props.brand),
        roundedButtons: computed(() => props.roundedButtons),
        roundedAlerts: computed(() => props.roundedAlerts),
        roundedInputs: computed(() => props.roundedInputs),
    }),
);

watch(
    () => props.brand,
    (brand) => loadBrandCSS(brand),
    { immediate: true },
);

const classNames = computed(() => {
    const classes = [
        props.roundedButtons && 'use-rounded-corner-buttons',
        props.roundedAlerts && 'use-rounded-corner-alert',
        props.roundedInputs && 'use-rounded-corner-inputs',
    ].filter(Boolean);
    return classes.length > 0 ? classes.join(' ') : undefined;
});
</script>

<template>
    <!-- `v-bind` with an undefined class omits the attribute (`:class` would render `class=""`). -->
    <div
        v-bind="{ class: classNames }"
        :data-bs-theme="theme"
        :data-bs-brand="brand"
    >
        <slot />
    </div>
</template>
