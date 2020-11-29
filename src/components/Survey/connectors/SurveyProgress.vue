<script>
  import ProgressBar from '@/components/Shared/ProgressBar'
  import { mapGetters } from 'vuex'

  export default {
    name: 'SurveyProgress',
    components: {
      ProgressBar
    },
    computed: {
      ...mapGetters('survey', ['getStages', 'getCurrentStage']),
      countStages () {
        return this.getStages.length
      },
      currentStage () {
        return this.getCurrentStage
      }
    }
  }
</script>

<template>  
  <div class="progress-bar-container">
  <progress-bar 
  :currentStage="currentStage" 
  :totalSteps="countStages"
  />
  </div>
</template>

<style lang="css">
  .progress-bar-container {
    display: flex;
    flex-wrap: nowrap;
    width: 80px;
    align-items: center;
  }

</style>
