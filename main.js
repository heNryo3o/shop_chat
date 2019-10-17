import Vue from 'vue'
import App from './App'

import md5 from './js_sdk/js-md5/build/md5.min.js'
Vue.component('md5',md5)
import JIM from './js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js'
Vue.component('JIM',JIM)
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
// Vue.prototype.JIM=new JMessage({})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
