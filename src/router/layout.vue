<script lang="tsx">
import { defineComponent } from 'vue';
import { useDesign } from '@/hooks/useDesign.ts';

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('layout')

export default defineComponent({
    name: 'Layout',
    setup() {
        return () => (
            <section class={[prefixCls, 'w-[100%] h-[100%] relative']}>
            </section>
        )
    },
})
</script>

<style lang="scss" scoped>

</style>