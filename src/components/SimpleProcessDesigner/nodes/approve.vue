<template>
	<div class="approve-node">
		approve-node
	</div>
</template>
<script lang="tsx" setup>
import { SimpleFlowNode } from '../config/consts';
import { useWatchNode } from '../config/nodes';
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