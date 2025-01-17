import { isBrowser } from '@/utils'

interface UseTitleOption {
	restoreOnUnmount: Boolean
}
export default function useTitle(title: string, options?: UseTitleOption) {
	const titleRef = ref(isBrowser ? document.title : '')
	document.title = title
	onUnmounted(() => {
		if (options?.restoreOnUnmount) {
			document.title = titleRef.value
		}
	})
}
