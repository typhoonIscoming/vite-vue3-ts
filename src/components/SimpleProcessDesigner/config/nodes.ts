import { SimpleFlowNode } from './consts'
import { TaskStatusEnum } from './task'

export function useWatchNode(props: { flowNode: SimpleFlowNode }): Ref<SimpleFlowNode> {
	const node = ref<SimpleFlowNode>(props.flowNode)
	watch(
		() => props.flowNode,
		newValue => {
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
