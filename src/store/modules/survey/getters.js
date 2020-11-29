export default {
  getFirstName: state => state.user.name,
  getGoals: state => state.user.goals,
  getDiet: state => state.user.diet,
  getBirthday: state => state.user.dob,
  getStages: state => state.stages,
  getCurrentStage: state => state.currentStage
}
