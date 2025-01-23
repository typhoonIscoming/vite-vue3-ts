<template>
	<div class="node-wrapper copy-task-node relative">
		<div class="node-root approve-node w-200px relative">
			<div class="node-container">
				<div class="node-title-container p-5px text-wrap bg-#FE943E relative">
					<Icon class="absolute left-5px top-0 bottom-0 m-auto" icon="ep:position" />
					抄送人
				</div>
				<div class="node-content p-10px break-all">
					approve-node-{{ currentNode.id }}
				</div>
			</div>
			<Close @close="handleClose" />
		</div>
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
import Close from '../Close.vue';
// 抄送节点
defineOptions({ name: 'CopyTaskEventNode' });

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

const handleClose = () => {
	emits('update:flowNode', currentNode.value.childNode)
}
</script>
<style lang="scss" scoped>

</style>