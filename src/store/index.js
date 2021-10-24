import Vue from 'vue'
import Vuex from 'vuex'
import curiosity from './modules/curiosity'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    curiosity
  }
})
