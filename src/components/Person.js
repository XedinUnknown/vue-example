export default {
  props: ['id'],
  computed: {
    person() {
      return this.$store.state.persons[this.id]
    }
  },
  render(h) {
    return (
      <div>
        <input placeholder="Full name"
          value={this.person.name} />
        <input placeholder="Occupation"
          value={this.person.occupation} />
      </div>
    )
  }
}
