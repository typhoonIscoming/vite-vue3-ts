<template>
	<div class="end-node-wrapper">
		<div
			class="end-node-box cursor-pointer node-shadow-box"
			:class="`${useTaskStatusClass(currentNode?.activityStatus)}`"
			@click="nodeClick"
		>
			<span class="node-fixed-name" title="结束">结束</span>
		</div>
	</div>
</template>
<script lang="tsx" setup>
import { SimpleFlowNode } from '../config/consts'
import { useWatchNode, useTaskStatusClass } from '../config/nodes'

defineOptions({ name: 'EndEventNode' })
const props = defineProps({
	flowNode: {
		type: Object as () => SimpleFlowNode,
		default: () => null
	}
})
// 监控节点变化
const currentNode = useWatchNode(props);

const nodeClick = () => {
	console.log('end node click')
}
</script>
<style lang="scss" scoped>
</style>
