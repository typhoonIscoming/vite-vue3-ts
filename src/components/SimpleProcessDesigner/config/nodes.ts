import { SimpleFlowNode, NODE_DEFAULT_NAME, NodeType, SuperSimpleFlowNode } from './consts'
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

export const initFlowNode: (type: NodeType) => SuperSimpleFlowNode = (type: NodeType) => {
	switch (type) {
		case NodeType.USER_TASK_NODE:
			return {
				id: `Activity_${generateUUID()}`,
				name: NODE_DEFAULT_NAME.get(NodeType.USER_TASK_NODE) as string,
				type: NodeType.USER_TASK_NODE,
				icon: 'ep:avatar'
			}
		case NodeType.COPY_TASK_NODE:
			return {
				id: `Activity_${generateUUID()}`,
				name: NODE_DEFAULT_NAME.get(NodeType.COPY_TASK_NODE) as string,
				type: NodeType.COPY_TASK_NODE,
				icon: 'material-symbols-light:content-copy'
			}
		case NodeType.CONDITION_BRANCH_NODE:
			return {
				id: `Activity_${generateUUID()}`,
				name: NODE_DEFAULT_NAME.get(NodeType.CONDITION_BRANCH_NODE) as string,
				type: NodeType.CONDITION_BRANCH_NODE,
				icon: 'material-symbols:schema-outline-rounded',
				conditionNodes: [
					{
						id: 'Flow_' + generateUUID(),
						name: '条件1',
						showText: '',
						type: NodeType.CONDITION_NODE,
						childNode: undefined,
						conditionType: 1,
						defaultFlow: false
					},
					{
						id: 'Flow_' + generateUUID(),
						name: '条件2',
						showText: '',
						type: NodeType.CONDITION_NODE,
						childNode: undefined,
						conditionType: 1,
						defaultFlow: false
					}
				]
			}
		default:
			return {
				id: `Activity_${generateUUID()}`,
				name: NODE_DEFAULT_NAME.get(NodeType.USER_TASK_NODE) as string,
				type: NodeType.USER_TASK_NODE,
				icon: 'ep:avatar'
			}
	}
}

export const nodeTypes: SuperSimpleFlowNode[] = [
	{ ...initFlowNode(NodeType.USER_TASK_NODE) }, // 审批人节点
	{ ...initFlowNode(NodeType.COPY_TASK_NODE) }, // 抄送人节点
	{ ...initFlowNode(NodeType.CONDITION_BRANCH_NODE) } // 条件节点
]
