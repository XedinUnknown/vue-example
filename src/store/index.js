import Vue from 'vue'
import Vuex from 'vuex'
import {
  ADD_PERSON,
} from './constants'

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
  [ADD_PERSON](state) {
    // Add data to state
    // Generate a unique ID
    const id = String(Math.random())
    Vue.set(state.persons, id, {
      name: '',
      occupation: ''
    })
    // Add to array
    state.personList.push(id)
  },
}

export default new Vuex.Store({state, mutations})
