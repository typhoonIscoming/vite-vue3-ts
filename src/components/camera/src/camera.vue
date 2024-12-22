<template>
	<div class="camera-container">
		<video
			ref="videoRef"
			class="camera-video"
			:class="{ hidden: !isStarted }"
			autoplay
			playsinline
			webkit-playsinline
			x5-video-player-type="h5"
			x5-video-player-fullscreen="true"
			x5-video-orientation="portrait"
		></video>
		<div v-if="!isStarted" class="camera-placeholder">摄像头未开启</div>
		<div class="camera-controls">
			<button @click="toggleCamera">
				{{ isStarted ? '关闭摄像头' : '开启摄像头' }}
			</button>
			<button v-if="isStarted" @click="switchCamera">切换摄像头</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref, onUnmounted } from 'vue'

	const videoRef = ref<HTMLVideoElement | null>(null)
	const isStarted = ref(false)
	let stream: MediaStream | null = null
	let currentFacingMode: 'user' | 'environment' = 'user'

	// 获取摄像头约束配置
	const getConstraints = (facingMode: 'user' | 'environment') => {
		const constraints = {
			audio: false,
			video: {
				facingMode,
				width: { ideal: 1280 },
				height: { ideal: 720 }
			}
		}

		// 针对iOS设备的特殊处理
		if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
			Object.assign(constraints.video, {
				width: { min: 0, ideal: 1280, max: 1920 },
				height: { min: 0, ideal: 720, max: 1080 }
			})
		}

		return constraints
	}

	// 开启摄像头
	const startCamera = async (facingMode: 'user' | 'environment' = 'user') => {
		try {
			if (stream) {
				stream.getTracks().forEach(track => track.stop())
			}

			stream = await navigator.mediaDevices.getUserMedia(getConstraints(facingMode))
			if (videoRef.value) {
				videoRef.value.srcObject = stream
				currentFacingMode = facingMode
				isStarted.value = true
			}
		} catch (error: any) {
			console.error('摄像头启动失败:', error)
			if (error.name === 'NotAllowedError') {
				alert('请允许访问摄像头权限')
			} else if (error.name === 'NotFoundError') {
				alert('未找到可用的摄像头设备')
			} else {
				alert('摄像头启动失败，请检查设备或刷新页面重试')
			}
		}
	}

	// 切换前后摄像头
	const switchCamera = async () => {
		const newFacingMode = currentFacingMode === 'user' ? 'environment' : 'user'
		await startCamera(newFacingMode)
	}

	// 开启/关闭摄像头
	const toggleCamera = async () => {
		if (!isStarted.value) {
			await startCamera(currentFacingMode)
		} else {
			if (stream) {
				stream.getTracks().forEach(track => track.stop())
			}
			if (videoRef.value) {
				videoRef.value.srcObject = null
			}
			isStarted.value = false
		}
	}

	// 组件销毁时关闭摄像头
	onUnmounted(() => {
		if (stream) {
			stream.getTracks().forEach(track => track.stop())
			stream = null
		}
	})
</script>

<style scoped>
	.camera-container {
		width: 100%;
		max-width: 640px;
		margin: 0 auto;
		position: relative;
	}

	.camera-video {
		width: 100%;
		height: auto;
		border-radius: 8px;
		background-color: #000;
		transform: scaleX(1); /* 可以通过修改这个值来水平翻转视频 */
	}

	.camera-placeholder {
		width: 100%;
		height: 480px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #f5f5f5;
		border-radius: 8px;
		color: #666;
	}

	.camera-controls {
		margin-top: 16px;
		text-align: center;
		display: flex;
		gap: 10px;
		justify-content: center;
	}

	.camera-controls button {
		padding: 8px 16px;
		border-radius: 4px;
		background-color: #409eff;
		color: white;
		border: none;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.camera-controls button:hover {
		background-color: #66b1ff;
	}

	.hidden {
		display: none;
	}
</style>
