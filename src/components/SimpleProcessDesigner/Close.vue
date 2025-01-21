<template>
	<span
		class="close-btn absolute right-0 top-0 text-0 transform-translate-x-50% transform-translate-y--50%"
		@click="handleClose"
	>
		<Icon icon="ep:circle-close-filled" color="#F56C6C" size="20" />
	</span>

</template>

<script lang="tsx" setup>
const emit = defineEmits(['close']);

const handleClose = () => {
	emit('close')
}
</script>
