import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    {
      name: 'fix-vueuse-pure-annotation',
      enforce: 'pre',
      transform(code, id) {
        if (id.includes('@vueuse/core/dist/index.js')) {
          return code
            .replace(/\/\*\s*#__PURE__\s*\*\//g, '')
            .replace(/\/\*\s*@__PURE__\s*\*\//g, '/*@__PURE__*/')
        }
      },
    },
  ],
})
