export default {
  props: ['id'],
  computed: {
    person() {
      return this.$store.state.persons[this.id]
    }
  },
  methods: {
    remove() {
      this.$store.commit('REMOVE_PERSON', this.id)
    }
  },
  render(h) {
    return (
      <div>
        <input placeholder="Full name"
          value={this.person.name} />
        <input placeholder="Occupation"
          value={this.person.occupation} />
        <button onClick={this.remove}>Remove</button>
      </div>
    )
  }
}
