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
   * Populate the state with data
   * @param {Array} data.peopleList Array of unique IDs for order of each person
   * @param {Object} data.people Keyed by unqiue IDs, values are an object with
   * key-value pairs for name and occupation
   */
  [LOAD_PEOPLE](state, data) {
    state.peopleList = data.peopleList
    state.people = data.people
  },
  /**
   * Sort the list of people by full name
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
  /**
   * Add a person to the list 
   */
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
   * Edit the detials for a specific person
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
   * Remove a specific person from the list
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
