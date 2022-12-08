/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from '@babel/core'

export default defineConfig({
  plugins: [react()],
})
