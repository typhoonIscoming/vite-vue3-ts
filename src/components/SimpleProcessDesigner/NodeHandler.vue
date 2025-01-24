<template>
	<div class="node-handler-wrapper">
		<div class="node-handler text-0">
			<el-popover
				v-model:visible="visible"
				placement="top-start"
				trigger="hover"
				width="auto"
				teleported
				popper-class="node-handler-popover"
			>
				<template #reference>
					<Icon icon="ep:circle-plus-filled" color="#1675FE" size="20" />
				</template>
				<div class="handler-item-wrapper flex items-center w-fit">
					<div
						v-for="(item, i) in nodeTypes"
						:key="i"
						class="handler-item cursor-pointer"
						@click="handleAddNode(item)"
					>
						<div class="node-icon-box text-center">
							<Icon :icon="item.icon" :size="30" class="node-icon" />
						</div>
						<div class="node-name">{{ item.name }}</div>
					</div>
				</div>
			</el-popover>
		</div>
	</div>
</template>
<script lang="tsx" setup>
import { nodeTypes, initFlowNode } from './config/nodes';
import { SuperSimpleFlowNode, SimpleFlowNode } from './config/consts'

const props = defineProps({
	childNode: {
		type: Object as () => SimpleFlowNode,
		default: null
	},
	currentNode: {
		type: Object as () => SimpleFlowNode,
		required: true
	}
})
const emits = defineEmits(['update:childNode'])
const visible = ref(false);

const handleAddNode = (item: SuperSimpleFlowNode) => {
	const { type } = item;
	const data = initFlowNode(type);
	const node = {
		...data,
		childNode: props.childNode,
	}
	emits('update:childNode', node)
	visible.value = false;
}
</script>
<style lang="scss">
	.node-handler-popover {
		min-width: auto !important;
	}
	.handler-item-wrapper {
		.handler-item {
			& ~ .handler-item {
				margin-left: 10px;
			}
		}
	}
</style>
