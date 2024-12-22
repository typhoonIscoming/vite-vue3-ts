<template>
  <div class="camera-container">
    <video ref="videoRef" class="camera-video" :class="{ hidden: !isStarted }" autoplay></video>
    <div v-if="!isStarted" class="camera-placeholder">
      摄像头未开启
    </div>
    <div class="camera-controls">
      <button @click="toggleCamera">
        {{ isStarted ? '关闭摄像头' : '开启摄像头' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'

const videoRef = ref<HTMLVideoElement | null>(null)
const isStarted = ref(false)
let stream: MediaStream | null = null

// 开启/关闭摄像头
const toggleCamera = async () => {
  try {
    if (!isStarted.value) {
      // 获取摄像头视频流
      stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      })
      if (videoRef.value) {
        videoRef.value.srcObject = stream
      }
      isStarted.value = true
    } else {
      // 关闭摄像头
      if (stream) {
        stream.getTracks().forEach(track => track.stop())
        stream = null
      }
      if (videoRef.value) {
        videoRef.value.srcObject = null
      }
      isStarted.value = false
    }
  } catch (error) {
    console.error('摄像头操作失败:', error)
    alert('无法访问摄像头，请确保已授予摄像头权限')
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
