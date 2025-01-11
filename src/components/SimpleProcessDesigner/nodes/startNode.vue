<template>
	<div class="start-node p-10px inline-block b-1px b-style-solid b-black">
		<div class="start-type">start-node</div>
		<div>{{ currentNode.name }}</div>
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
.start-node{
	border-radius: 5px;
}
</style>