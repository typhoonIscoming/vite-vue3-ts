import type { LayoutType, ElementPlusSize, ThemeTypes } from '@/types/layout.d.ts'

import { defineStore } from 'pinia'

interface AppState {
	breadcrumb: boolean
	breadcrumbIcon: boolean
	collapse: boolean
	uniqueOpened: boolean
	hamburger: boolean
	screenfull: boolean
	search: boolean
	size: boolean
	locale: boolean
	message: boolean
	tagsView: boolean
	tagsViewImmerse: boolean
	tagsViewIcon: boolean
	logo: boolean
	fixedHeader: boolean
	greyMode: boolean
	pageLoading: boolean
	layout: LayoutType
	title: string
	userInfo: string
	isDark: boolean
	currentSize: ElementPlusSize
	sizeMap: ElementPlusSize[]
	mobile: boolean
	footer: boolean
	theme: ThemeTypes
	fixedMenu: boolean
}
