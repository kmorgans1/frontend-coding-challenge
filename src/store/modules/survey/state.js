const state = () => ({
  user: {
    name: '',
    goals: [],
    diet: '',
    dob: ''
  },

  stages: ['Name', 'Goals', 'Diet', 'Dob', 'Success'],
  currentStage: 0
})

export default state
