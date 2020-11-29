export default {
  setFirstName (state, name) {
    state.user.name = name
  },
  setGoals (state, goal) {
    if (state.user.goals.length < 4 && !state.user.goals.includes(goal)) {
      state.user.goals.push(goal)
    } else if (state.user.goals.includes(goal)) {
      state.user.goals = state.user.goals.filter(x => x !== goal)
    }
  },
  setDiet (state, diet) {
    state.user.diet = state.user.diet !== diet ? state.user.diet = diet : state.user.diet.replace(diet, '')
  },
  setBirthday (state, dob) {
    state.user.dob = dob
  },
  setCurrentStage (state) {
    state.currentStage++
  }
}
