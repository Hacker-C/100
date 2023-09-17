import { defineConfig, presetAttributify, presetUno, presetWebFonts } from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetWebFonts({
      provider: 'none', // the provider for china
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700']
      }
    })
  ],
  shortcuts: {
    'bg': 'bg-red-800',
    'flex-center': 'flex justify-center items-center'
  },
  rules: [
    ['centered', {
      position: 'absolute',
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
    }
  },
  safelist: ['bg-yellow']
})
