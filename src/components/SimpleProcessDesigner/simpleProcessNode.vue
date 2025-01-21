<template>
	<div class="simple-process-wrapper w-fit">
		<!--开始节点-->
		<XHStartNode
			v-if="currentNode && currentNode.type === NodeType.START_USER_NODE"
			:flow-node="currentNode"
		/>
		<!--审核节点-->
		<XHApproveNode
			v-if="currentNode && currentNode.type === NodeType.USER_TASK_NODE"
			:flow-node="currentNode"
			@update:flow-node="handleModelValueUpdate"
		/>
		<!--结束节点-->
		<XHEndNode
			v-if="currentNode && currentNode.type === NodeType.END_EVENT_NODE"
			:flow-node="currentNode"
		/>
	</div>
	<!-- 递归显示孩子节点  -->
	<ProcessNodeTree
		v-if="currentNode && currentNode.childNode"
		v-model:flow-node="currentNode.childNode"
		:parent-node="currentNode"
	/>
</template>
<script lang="tsx" setup>
	import { SimpleFlowNode, NodeType } from './config/consts'
	import XHStartNode from './nodes/startNode.vue'
	import XHEndNode from './nodes/endNode.vue'
	import XHApproveNode from './nodes/approve.vue'
	import { useWatchNode } from './config/nodes'

	defineOptions({ name: 'ProcessNodeTree' })

	const props = defineProps({
		flowNode: {
			type: Object as () => SimpleFlowNode,
			default: null
		}
	})

	const currentNode = useWatchNode(props)
	const emits = defineEmits<{
		'update:flowNode': [node: SimpleFlowNode | undefined]
		'find:recursiveFindParentNode': [
			nodeList: SimpleFlowNode[],
			curentNode: SimpleFlowNode,
			nodeType: number
		]
	}>()

	const handleModelValueUpdate = (updateValue: SimpleFlowNode) => {
		emits('update:flowNode', updateValue)
	}
</script>
<style lang="scss">
	@import url('./processNode.scss');
</style>
