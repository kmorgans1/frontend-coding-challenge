<script>
  import ThvButton from '@/components/Shared/Button'
  import SuccessThriva from '@/assets/images/thrivaling.png'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Success',
    components: {
      ThvButton
    },
    methods: {
      startOver() {
        this.$store.commit('survey/resetState')
        this.$router.push('/')
      }
    },
    computed: {
      ...mapGetters('survey', ['getFirstName', 'getGoals', 'getDiet', 'getBirthday']),
    successThriva () {
      return SuccessThriva
    },
      firstName () {
        return this.getFirstName
      },
      goals () {
        return this.getGoals.join(', ')
      },
      diet () {
        return this.getDiet
      },
      dob () {
        const date = new Date(this.getBirthday)
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
      },
    },
  }
</script>

<template>
    <div class="grid-x grid-x-margin">
    <div class="cell small-12 medium-4 medium-offset-4">
      <div class="success-box align-center">
        <img :src="successThriva" class="successImg" />
        <h1>All done!</h1>
        <p class="message"> Thank you for completing the survey. The following results have been submitted:</p>
      </div>
      <div class="survey-box">
          <p class="label">Name</p>
          <p class="details">{{ firstName }}</p>

          <p class="label">Goals</p>
          <p class="details">{{ goals }}</p>

          <p class="label">Diet</p>
          <p class="details">{{ diet }}</p>

          <p class="label">DOB</p>
          <p class="details">{{ dob }}</p>
                    
          <div class="align-center reset">
          <thv-button element="button" size="large" @click="startOver">Start over</thv-button>
          </div>
        </div>
      </div>
    </div>
</template>

<style lang='css'>
.success-box {
  margin-bottom: 30px;
}

.successImg {
  height: 150px;
  margin-bottom: 20px;
}

.message {
  font-size: 1.25em;
  color: #70759e;
}

.survey-box {
  padding: 30px;
  background-color: #ffffff;
  box-shadow: 0 6px 20px 0 #3d42502d;
  border-radius: 1rem;
}

.label {
  margin-bottom: 5px;
  color: #99A2BF;
  font-size: 14px;
  line-height: 21px;
}

.details {
  margin-bottom: 20px;
  color: #3D4250;
  font-size: 1em;
  line-height: 24px;
}

.reset {
  margin-top: 40px;
}
</style>
