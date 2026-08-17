import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // PNG → comprime con oxipng (sin pérdida de calidad visual)
      png: {
        quality: 80,
      },
      // JPG/JPEG
      jpg: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      // WebP → mejor compresión que PNG/JPG, calidad excelente
      webp: {
        lossless: false,
        quality: 82,
        alphaQuality: 90,
      },
      // Evita procesar archivos muy pequeños
      includePublic: true,
    }),
  ],
})
