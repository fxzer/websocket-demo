import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  ignores: ['eslint.config.mjs'],
  rules: { 'no-console': 'warn' },
})
