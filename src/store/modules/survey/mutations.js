export default {
  setFirstName (state, name) {
    state.name = name
  },
  setGoals (state, goal) {
    if (state.goals.length < 4 && !state.goals.includes(goal)) {
      state.goals.push(goal)
    } else if (state.goals.includes(goal)) {
      state.goals = state.goals.filter(x => x !== goal)
    }
  },
  setDiet (state, diet) {
    state.diet = state.diet !== diet ? state.diet = diet : state.diet.replace(diet, '')
  },
  setBirthday (state, dob) {
    state.dob = dob
  }
}
