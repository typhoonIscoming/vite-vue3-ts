<template>
	<div class="end-node-wrapper">
		end-node
		<div
			class="end-node-box cursor-pointer"
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
	// 结束节点包装
	.end-node-wrapper {
		margin-bottom: 16px;

		.end-node-box {
			display: flex;
			width: 80px;
			height: 36px;
			color: #212121;
			border: 2px solid #fafafa;
			border-radius: 30px;
			box-shadow: 0 1px 5px 0 rgb(10 30 65 / 8%);
			box-sizing: border-box;
			justify-content: center;
			align-items: center;

			&.status-pass {
				background-color: #a9da90;
				border-color: #6bb63c;
			}

			&.status-pass:hover {
				border-color: #6bb63c;
			}

			&.status-reject {
				background-color: #f6e5e5;
				border-color: #e47470;
			}

			&.status-reject:hover {
				border-color: #e47470;
			}

			&.status-cancel {
				background-color: #eaeaeb;
				border-color: #919398;
			}

			&.status-cancel:hover {
				border-color: #919398;
			}
		}
	}
</style>
