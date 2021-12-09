let initialState = {
  categories: [
    {name: 'Food', products: 0},
    {name: 'Alcohol', products: 0},
    {name: 'Misc', products: 0}
  ],
}

function candidateReducer(state = initialState, action) {
  let {type, payload} = action;

  switch(type) {
    
    case 'ADD_VOTE':
      let newCandidates = state.categories.map(person => {

        if (person.name === payload) {
          return {...person, products: person.products + 1}
        } else {return person}

      })
      return{categories: newCandidates}

    case 'RESET_VOTES':
      return initialState
    
      default:
      return state
  }
}

export default candidateReducer;