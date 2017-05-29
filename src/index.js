import Vue from 'vue'
import store from './store'
import './styles.css'

new Vue({
  store,
  el: '#app',
  render(h) {
    return (
      <div>
        <transition-group tag="div" name="list" class="container">
          {store.state.personList.map(id => 
          )}
        </transition-group>
      </div>
    )
  }
})
