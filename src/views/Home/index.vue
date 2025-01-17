<template>
	<div class="home pt-30px">
		<div class="get-config">
			<el-button type="primary" @click="handlePrint">打印数据</el-button>
		</div>
		<XHProcessNodeTree v-if="processNodeTree" :flow-node="processNodeTree" />
		<div class="m-50px"></div>
		<Camera />
	</div>
</template>
<script setup lang="tsx">
	import XHProcessNodeTree from '@/components/SimpleProcessDesigner'
	import { NodeType, NodeId } from '@/components/SimpleProcessDesigner/config/consts'
	import Camera from '@/components/camera/src/camera.vue'

const processNodeTree = ref()

const handlePrint = () => {
	console.log('===', { ...processNodeTree.value })
}

	onMounted(() => {
		processNodeTree.value = {
			name: '发起人',
			type: NodeType.START_USER_NODE,
			id: NodeId.START_USER_NODE_ID,
			childNode: {
				id: NodeId.END_EVENT_NODE_ID,
				name: '结束',
				type: NodeType.END_EVENT_NODE
			}
		}
	})
</script>
<style lang="scss" scoped></style>
