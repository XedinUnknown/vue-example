export default {
  props: ['id'],
  computed: {
    person() {
      return this.$store.state.persons[this.id]
    }
  },
  methods: {
    edit(e, key) {
      this.$store.commit({
        type: 'EDIT_PERSON',
        id: this.id,
        data: {
          [key]: e.target.value
        }
      })
    },
    remove() {
      this.$store.commit('REMOVE_PERSON', this.id)
    }
  },
  render(h) {
    return (
      <div>
        <input placeholder="Full name"
          onInput={e => this.edit(e, 'name')}
          value={this.person.name} />
        <input placeholder="Occupation"
          onInput={e => this.edit(e, 'occupation')}
          value={this.person.occupation} />
        <button onClick={this.remove}>Remove</button>
      </div>
    )
  }
}
