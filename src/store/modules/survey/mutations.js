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
  },
  removeCurrentStage (state) {
    state.currentStage--
  },
  resetState (state) {
    state.user.name = ''
    state.user.goals = []
    state.user.diet = ''
    state.user.dob = ''
    state.currentStage = 0
  }
}
