<script lang="tsx">
import { useDesign } from '@/hooks/web/useDesign';

const { getPrefixCls } = useDesign();


export default defineComponent({
    name: 'Layout',
    setup() {
        return () => (
            <section
                class={[prefixCls, `${prefixCls}__${layout.value}`, 'w-[100%] h-[100%] relative']}
            >

            </section>
        )
    }
})
</script>

<style lang="scss" scoped>

</style>