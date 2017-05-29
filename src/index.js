import Vue from 'vue'
import Person from './components/Person'
import store from './store'
import './styles.css'

new Vue({
  store,
  el: '#app',
  components: {Person},
  render(h) {
    return (
      <div>
        <transition-group tag="div" name="list" class="container">
          {store.state.personList.map(id => 
            <Person id={id} key={id} />
          )}
        </transition-group>
      </div>
    )
  }
})
