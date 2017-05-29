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
  },
  render(h) {
    return (
      <div>
        <button onClick={this.add}>Add Person</button>
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
