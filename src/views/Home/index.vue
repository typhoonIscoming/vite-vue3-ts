<template>
	<div class="home">
		<Header />
	</div>
</template>
<script setup lang="tsx">
	// import XHProcessNodeTree from '@/components/SimpleProcessDesigner'
	import { NodeType, NodeId } from '@/components/SimpleProcessDesigner/config/consts'
	// import Camera from '@/components/camera/src/camera.vue'
	import Header from '@/components/Header'

	const processNodeTree = ref()
	const option = ref({
		title: {
			text: '剩余油量表',
			style: {
				fill: '#fff'
			}
		},
		series: [
			{
				type: 'gauge',
				data: [{ name: 'itemA', value: 55 }],
				center: ['50%', '55%'],
				axisLabel: {
					formatter: '{value}%',
					style: {
						fill: '#fff'
					}
				},
				axisTick: {
					style: {
						stroke: '#fff'
					}
				},
				animationCurve: 'easeInOutBack'
			}
		]
	})

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
