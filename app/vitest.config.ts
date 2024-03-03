import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    alias: {
      '@': '/src'
    },
    include: [
      './tests/units/**/*.{ts,js}'
    ]
  }
})
