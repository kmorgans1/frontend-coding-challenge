import actions from '@/store/modules/survey/actions'
import axios from 'axios'

jest.mock('axios')

describe('actions', () => {
  describe('sendToApi', () => {
    it('should send the user data to the api', () => { 

      const data = {
        state: {
            user: {
              name: 'Kirstie',
              goals: ['Fitness', 'Mood'],
              diet: 'No',
              dob: '2020-09-23T17:05:04.606Z'
            },
        },
      }
      return actions.sendToApi(data).then(() => {
        expect(axios.post.mock.calls.length).toBe(1)
        expect(axios.post.mock.calls[0][0]).toBe('http://localhost:3000/users')
        // expect(axios.post.mock.calls[0][1]).toBe(data.state.user)
      })
    })
  })
})
