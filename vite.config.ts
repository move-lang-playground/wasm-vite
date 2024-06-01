import { defineConfig } from 'vite'
import wasm from "vite-plugin-wasm";
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), wasm()]

})
