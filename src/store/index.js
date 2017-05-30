import Vue from 'vue'
import Vuex from 'vuex'
import {
  LOAD_PEOPLE,
  SORT_PEOPLE,
  ADD_PERSON,
  EDIT_PERSON,
  REMOVE_PERSON
} from './constants'

Vue.use(Vuex)

export const state = {
  peopleList: [],
  people: {}
}

const mutations = {
  /**
   * @param {Array} personList TODO: add description
   * @param {Object} persons TODO: add description
   */
  [LOAD_PEOPLE](state, data) {
    state.peopleList = data.peopleList
    state.people = data.people
  },
  /**
   * @param {Boolean} asc True to sort ascending, false for descending
   */
  [SORT_PEOPLE](state, asc) {
    const dir = asc ? 1 : -1
    state.peopleList.sort((a, b) => {
      // Change all values to lowercase so "Z" doesn't sort above "a"
      const name = x => state.people[x].name.toLowerCase() 
      const nameA = name(a), nameB = name(b)
      if (nameA > nameB) return dir
      if (nameA < nameB) return -dir
      return 0
    })
  },
  [ADD_PERSON](state) {
    // Add data to state
    // Generate a unique ID
    const id = String(Date.now() + Math.random())
    Vue.set(state.people, id, {
      name: '',
      occupation: ''
    })
    // Add to array
    state.peopleList.push(id)
  },
  /**
   * @param {String} payload.id Unique identifier for the person to edit
   * @param {Object} payload.data Object of data to merge with the existing info,
   * typically containing either 'name' or 'occupation' keys
   */
  [EDIT_PERSON](state, payload) {
    Vue.set(state.people, payload.id, {
      ...state.people[payload.id],
      ...payload.data
    })
  },
  /**
   * @param {String} id Unique identifier for the person to delete
   */
  [REMOVE_PERSON](state, id) {
    // First, remove from array
    const index = state.peopleList.indexOf(id)
    if (index >= 0) {
      state.peopleList.splice(index, 1)
    }
    // Second, remove the object
    Vue.delete(state.people, id)
  }
}

export default new Vuex.Store({
  state,
  mutations
})
