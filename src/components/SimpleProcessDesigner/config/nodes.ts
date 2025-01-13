import { SimpleFlowNode, NODE_DEFAULT_NAME, NodeType } from './consts'
import { TaskStatusEnum } from './task'
import { generateUUID } from '@/utils'

export function useWatchNode(props: { flowNode: SimpleFlowNode }): Ref<SimpleFlowNode> {
	const node = ref<SimpleFlowNode>(props.flowNode)
	watch(
		() => props.flowNode,
		(newValue: SimpleFlowNode) => {
			node.value = newValue
		}
	)
	return node
}

export function useTaskStatusClass(taskStatus: TaskStatusEnum | undefined): string {
	if (!taskStatus) {
		return ''
	}
	if (taskStatus === TaskStatusEnum.APPROVE) {
		return 'status-pass'
	}
	if (taskStatus === TaskStatusEnum.RUNNING) {
		return 'status-running'
	}
	if (taskStatus === TaskStatusEnum.REJECT) {
		return 'status-reject'
	}
	if (taskStatus === TaskStatusEnum.CANCEL) {
		return 'status-cancel'
	}

	return ''
}

export const nodeTypes: SimpleFlowNode[] = [
	{
		id: `Activity_${generateUUID()}`,
		name: NODE_DEFAULT_NAME.get(NodeType.USER_TASK_NODE) as string,
		type: NodeType.USER_TASK_NODE
	},
	{
		id: `Activity_${generateUUID()}`,
		name: NODE_DEFAULT_NAME.get(NodeType.COPY_TASK_NODE) as string,
		type: NodeType.COPY_TASK_NODE
	}
]
