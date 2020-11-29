import axios from 'axios'
const API_URL = 'http://localhost:3000'

export default {
  async sendToApi (context) {
    const body = {
      user: {
        name: context.state.user.name,
        goals: context.state.user.goals,
        dob: context.state.user.dob,
        diet: context.state.user.diet
      }
    }
    const config = { headers: { 'Content-Type': 'application/json' } }
    return axios.post(`${API_URL}/users`, body, config)
  }
}
