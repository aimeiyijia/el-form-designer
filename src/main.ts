import Vue from 'vue'

import 'normalize.css'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

import SvgIcon from 'vue-svgicon'

import App from './app.vue'

Vue.use(ElementUI)

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')