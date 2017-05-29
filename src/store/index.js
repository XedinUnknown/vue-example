import Vue from 'vue'
import Vuex from 'vuex'
import {
  SORT_PEOPLE,
  ADD_PERSON,
  REMOVE_PERSON
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
  /**
   * @param {Boolean} asc True to sort ascending, false for descending
   */
  [SORT_PEOPLE](state, asc) {
    const dir = asc ? 1 : -1
    state.personList.sort((a, b) => {
      // Change all values to lowercase so "Z" doesn't sort above "a"
      const name = x => state.persons[x].name.toLowerCase() 
      const nameA = name(a), nameB = name(b)
      if (nameA > nameB) return dir
      if (nameA < nameB) return -dir
      return 0
    })
  },
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
  /**
   * @param {String} id Unique identifier for the person to delete
   */
  [REMOVE_PERSON](state, id) {
    // First, remove from array
    const index = state.personList.indexOf(id)
    if (index >= 0) {
      state.personList.splice(index, 1)
    }
    // Second, remove the object
    Vue.delete(state.persons, id)
  }
}

export default new Vuex.Store({state, mutations})
