<template>
	<header class="header flex ">
		<Decoration8 :style="`width:300px; height:${height}px;`"  />
		<div class="headerTitle flex-1 relative h-60px flex mt-20px">
			<h2 class="absolute left-0 right-0 top-0 m-auto c-white">施工养护综合数据</h2>
			<Decoration5 style="width:100%; height:40px;" class="flex-self-end" />
		</div>
		<Decoration8 :reverse="true" :style="`width:300px; height:${height}px;`" />
	</header>
</template>
<script lang="tsx" setup>
import { Decoration5, Decoration8 } from '@dataview/datav-vue3';

const height = ref(70);

</script>
<style lang='scss' scoped>

</style>
