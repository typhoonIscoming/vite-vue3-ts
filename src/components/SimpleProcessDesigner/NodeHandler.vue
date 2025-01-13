<template>
	<div class="node-handler-wrapper">
		<div class="node-handler">
			<el-popover
				placement="top-start"
				trigger="click"
				width="auto"
			>
				<template #reference>
					<el-icon size="20"><CirclePlus /></el-icon>
				</template>
				<div class="handler-item-wrapper flex items-center">
					<div v-for="(item, i) in nodeTypes" :key="i" class="handler-item">
						{{ item.name }}
					</div>
				</div>
			</el-popover>
		</div>
	</div>
</template>
<script lang="tsx" setup>
import { CirclePlus } from '@element-plus/icons-vue';
import { nodeTypes } from './config/nodes';
</script>