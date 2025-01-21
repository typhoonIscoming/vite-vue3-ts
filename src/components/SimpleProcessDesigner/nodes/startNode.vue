<template>
	<div class="node-wrapper">
		<div class="start-node node-container inline-block node-shadow-box">
			<div class="node-title-container p-5px bg-#556B96">
				{{ currentNode.name }}
			</div>
			<div class="node-content p-10px">所有人</div>
		</div>
		<NodeHandler
			v-if="currentNode"
			v-model:child-node="currentNode.childNode"
			:current-node="currentNode"
		/>
	</div>
</template>
<script lang="tsx" setup>
import { SimpleFlowNode } from '../config/consts';
import { useWatchNode } from '../config/nodes';
import NodeHandler from '../NodeHandler.vue';
// 开始节点
defineOptions({ name: 'StartEventNode' });
const props = defineProps({
	flowNode: {
		type: Object as () => SimpleFlowNode,
		default: () => null
	}
})
const currentNode = useWatchNode(props);

</script>
<style lang="scss" scoped>
</style>