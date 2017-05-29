import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  personList: [1, 2, 3],
  persons: {
    1: {
      name: "Johnny Appleseed",
      occupation: "Farmer",
    },
    2: {
      name: "Frank Underwood",
      occupation: "President",
    },
    3: {
      name: "Oprah Winfrey",
      occupation: "Media proprietor",
    }
  }
}

const mutations = {
}

export default new Vuex.Store({state, mutations})
