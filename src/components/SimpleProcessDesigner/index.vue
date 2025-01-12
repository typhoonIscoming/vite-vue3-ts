<template>
	<div class="simple-process-wrapper">
		<SimpleProcessNode :flow-node="currentNode" />
	</div>
	<!-- 递归显示孩子节点  -->
	
</template>
<script lang="tsx" setup>
import { useWatchNode } from './config/nodes';
import { SimpleFlowNode } from './config/consts';

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