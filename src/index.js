import Vue from 'vue'
import Person from './components/Person'
import store from './store'
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
