import Vue from 'vue'
import Person from './components/Person'
import store from './store'
import axios from 'axios'
import './styles.css'

new Vue({
  store,
  el: '#app',
  components: {Person},
  methods: {
    add: () => store.commit('ADD_PERSON'),
    sortAsc: () => store.commit('SORT_PEOPLE', true),
    sortDes: () => store.commit('SORT_PEOPLE', false)
  },
  async created() {
    // Load default state from myjson API
    try {
      let {data} = await axios.get('https://api.myjson.com/bins/scrk9')
      store.commit('LOAD_PEOPLE', data)
    } catch (err) {
      console.error(err)
      alert('There was an error loading from the myjson API.')
    }
  },
  render(h) {
    return (
      <div>
        <button onClick={this.add}>Add Person</button>
        <button onClick={this.sortAsc}>Sort Ascending</button>
        <button onClick={this.sortDes}>Sort Descending</button>
        <br /><br />
        <transition-group tag="div" name="list" class="container">
          {store.state.personList.map(id => 
            <Person id={id} key={id} />
          )}
        </transition-group>
      </div>
    )
  }
})
