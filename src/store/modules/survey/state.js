const state = () => ({
  user: {
    name: '',
    goals: [],
    diet: '',
    dob: ''
  },

  stages: ['Name', 'Goals', 'Diet', 'Dob'],
  currentStage: 0
})

export default state
