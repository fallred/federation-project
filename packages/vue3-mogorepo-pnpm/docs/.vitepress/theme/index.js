import DefaultTheme from 'vitepress/theme'

import ZIcon from '@z-ui/components/icon'
import '@z-ui/theme-chalk/src/index.scss'

console.log(ZIcon)
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ZIcon) // 在vitepress中 注册全局组件
  }
}
