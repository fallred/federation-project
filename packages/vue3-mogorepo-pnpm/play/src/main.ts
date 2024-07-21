import { createApp } from 'vue'
import App from './App.vue'

import Icon from '@z-ui/components/icon/index';
import Tree from '@z-ui/components/tree/index';
import Checkbox from '@z-ui/components/checkbox';
import Transfer from '@z-ui/components/transfer';
import '@z-ui/theme-chalk/src/index.scss';

const plugins = [Icon, Tree, Checkbox, Transfer]
const app = createApp(App)
plugins.forEach(plugin => app.use(plugin)) // 将组件注册成了全局组件 ，可以直接使用了

app.mount('#app')
