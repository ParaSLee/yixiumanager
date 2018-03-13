import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css'

export default {
  install(Vue) {
    Vue.use(MuseUI)
  }
}