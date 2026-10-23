<script setup lang="ts">
import { getIconPaths, getIconSizeClass } from '@ouds/core';
import { computed } from 'vue';

import { useOuds } from '../ouds-provider/use-ouds';
import type { IconProps } from './icon.model';

const props = defineProps<IconProps>();

const ouds = useOuds();

const paths = computed(() => getIconPaths(props.icon, ouds.brand));

const svgClass = computed(
    () =>
        [getIconSizeClass(props.size), props.class].filter(Boolean).join(' ') ||
        undefined,
);
</script>

<template>
    <!-- `v-bind` with an undefined class omits the attribute (`:class` would render `class=""`). -->
    <svg
        v-bind="{ class: svgClass }"
        width="1rem"
        height="1rem"
        :viewBox="icon.viewBox"
        fill="currentColor"
        aria-hidden="true"
    >
        <path
            v-for="(path, index) in paths"
            :key="index"
            :d="path.d"
            :fill="path.fill"
            :fill-rule="path.fillRule"
        />
    </svg>
    <span v-if="label" class="visually-hidden">{{ label }}</span>
</template>
