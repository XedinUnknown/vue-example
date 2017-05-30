import {expect} from 'chai'
import {mutations} from './'

const {
  LOAD_PEOPLE,
  SORT_PEOPLE,
  ADD_PERSON,
  EDIT_PERSON,
  REMOVE_PERSON
} = mutations

describe('Mutations', () => {
  
  let state, data = {
    peopleList: ['BOO', 1, 'foobar', 5],
    people: {
      'BOO': {
        name: 'Arthur',
        occupation: 'Firefighter'
      },
      1: {
        name: 'Stephanie',
        occupation: 'Pilot'
      },
      5: {
        name: 'aardvark',
        occupation: 'Teacher'
      },
      foobar: {
        name: 'Xavier',
        occupation: 'Doctor'
      }
    }
  }
  
  it('LOAD_PEOPLE', () => {
    state = {
      peopleList: [],
      people: {}
    }
    LOAD_PEOPLE(state, data)
    expect(state).to.eql(data)
  })
  
  it('SORT_PEOPLE', () => {
    state = JSON.parse(JSON.stringify(data))
    // Verify it sorts descending
    SORT_PEOPLE(state, true)
    expect(state.peopleList).to.eql([5, 'BOO', 1, 'foobar'])
    // Verify it sorts descending
    SORT_PEOPLE(state, false)
    expect(state.peopleList).to.eql(['foobar', 1, 'BOO', 5])
  })
  
  it('ADD_PERSON', () => {
    state = JSON.parse(JSON.stringify(data))
    ADD_PERSON(state)
    expect(state.people[state.peopleList[4]]).to.eql({
      name: '',
      occupation: ''
    })
  })
  
  it('EDIT_PERSON', () => {
    state = JSON.parse(JSON.stringify(data))
    const person = {
      name: 'Kelly',
      occupation: 'Author'
    }
    EDIT_PERSON(state, {
      id: state.peopleList[0],
      data: person
    })
    expect(state.people[state.peopleList[0]]).to.eql(person)
  })
  
  it('REMOVE_PERSON', () => {
    state = JSON.parse(JSON.stringify(data))
    const id = state.peopleList[1]
    REMOVE_PERSON(state, id)
    expect(state.peopleList).to.have.lengthOf(3)
    expect(state.people[id]).to.be.undefined
  })
  
})
