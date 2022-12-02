import { defineConfig, presetAttributify, presetUno } from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno()
  ],
  shortcuts: {
    bg: 'bg-red-800'
  },
  rules: [
    ['centered', {
      position: 'fixed',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }]
  ],
  transformers: [
    transformerAttributifyJsx()
  ],
  theme: {
    colors: {
      primary: '#149eca'
    },
    fontFamily: {
      mono: ['Fira Code', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace', 'dank mono']
    }
  }
})
