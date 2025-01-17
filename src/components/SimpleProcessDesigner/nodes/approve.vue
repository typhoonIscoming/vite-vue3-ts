<template>
	<div class="approve-node">
		approve-node
		<!-- 传递子节点给添加节点组件。会在子节点前面添加节点 -->
		<NodeHandler
			v-if="currentNode"
			v-model:child-node="currentNode.childNode"
			:current-node="currentNode"
		/>
	</div>
</template>
<script lang="tsx" setup>
import { SimpleFlowNode, NodeType } from '../config/consts';
import { useWatchNode } from '../config/nodes';
import NodeHandler from '../NodeHandler.vue';
// 审核节点
defineOptions({ name: 'ApproveEventNode' });
const props = defineProps({
	flowNode: {
		type: Object as () => SimpleFlowNode,
		default: () => null
	}
})
const emits = defineEmits<{
	'update:flowNode': [node: SimpleFlowNode | undefined]
	'find:parentNode': [nodeList: SimpleFlowNode[], nodeType: NodeType]
}>()
const currentNode = useWatchNode(props);
</script>
<style lang="scss" scoped>

</style>