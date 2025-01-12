<template>
	<ElConfigProvider :namespace="variables.elNamespace" :message="{ max: 5 }">
		<slot></slot>
	</ElConfigProvider>
</template>
<script lang="tsx" setup>
import { ComponentSize, ElConfigProvider } from 'element-plus'
import { propTypes } from '@/utils/propTypes'
import { useDesign } from '@/hooks/useDesign'

const { variables } = useDesign()

const props = defineProps({
	size: propTypes.oneOf<ComponentSize>(['default', 'small', 'large']).def('default')
})
</script>
<style lang="scss" scoped>
.configGlobal {
	min-height: 100vh;
}
</style>
