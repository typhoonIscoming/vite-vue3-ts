<script lang="tsx">
	import { defineComponent, h } from 'vue'
	import { useDesign } from '@/hooks/useDesign.ts'
	import { RouterView } from 'vue-router'

	const { getPrefixCls } = useDesign()

	const prefixCls = getPrefixCls('layout')

	export default defineComponent({
		name: 'Layout',
		setup() {
			return () => (
				<section class={[prefixCls, 'w-[100%] h-[100%] relative']}>
					<RouterView />
				</section>
			)
		}
	})
</script>

<style lang="scss" scoped></style>
