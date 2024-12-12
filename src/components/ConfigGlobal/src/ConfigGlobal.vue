<template>
    <div class="configGlobal">
        <ElConfigProvider
            :namespace="variables.elNamespace"
            :message="{ max: 5 }"
        >
            <slot></slot>
        </ElConfigProvider>
    </div>
</template>
<script lang="tsx" setup>
import { ComponentSize, ElConfigProvider } from 'element-plus';
import { defineComponent, defineProps } from 'vue';
import { propTypes } from '@/utils/propTypes'
import { useDesign } from '@/hooks/useDesign';

const { variables } = useDesign();

const props = defineProps({
    size: propTypes.oneOf<ComponentSize>(['default', 'small', 'large']).def('default')
})


</script>
<style lang="scss" scoped>

</style>