<script>
  import CheckButton from '@/components/Survey/components/CheckButton'
  import ThvButton from '@/components/Shared/Button'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Goals',
    components: {
      ThvButton,
      CheckButton
    },
    props: {
      name: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        goals: {
          improveEnergy: {
            name: 'Energy'
          },
          improveFitness: {
            name: 'Fitness'
          },
          improveLongTermHealth: {
            name: 'Long-term health'
          },
          improveMood: {
            name: 'Mood'
          },
          improveSleep: {
            name: 'Sleep'
          },
          improveWeight: {
            name: 'Weight'
          }
        }
      }
    },
    methods: {
      submit () {
        this.$router.push('/diet')
        this.$store.commit('survey/setCurrentStage')
      },
      back () {
        this.$router.push('/name')
        this.$store.commit('survey/removeCurrentStage')
      },
      setGoals (goal) {
        this.$store.commit('survey/setGoals', goal)
      },
      isGoalSelected (goal) {
        return this.getGoals.includes(goal)
      }
    },
    computed: {
      ...mapGetters('survey', ['getFirstName', 'getGoals']),
      firstName () {
        return this.getFirstName
      },
      disableGoalChoice () {
        return this.getGoals.length >= 4 && this.noGoalsSelected
      },
      noGoalsSelected () {
        return !this.getGoals.length
      }
    }
  }
</script>

<template>
  <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-6 medium-offset-3">
      <div class="survey-questions__goals align-center">
        <h1>Nice to meet you {{ firstName }}. What would you like to focus on?</h1>
        <p class="body--large question-description">Choose up to four</p>
        <div class="spacer sp__top--sm"></div>
        <check-button 
         v-for="(goal, key) in goals" 
         :key="key" 
         :text="goal.name" 
         :value="goal.name"
         :selected="isGoalSelected(goal.name)"
         :disabled="disableGoalChoice"
         @click="setGoals"
         />
        <div class="grid-x button-container">
          <div class="cell auto">
            <div class="back-button-container">
              <div class="back-button" @click="back">BACK</div>
            </div>
          </div>
          <div class="cell auto align-right">
            <thv-button element="button" size="large" :disabled="noGoalsSelected" @click="submit">Next</thv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
