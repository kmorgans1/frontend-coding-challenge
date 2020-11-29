<script>
  export default {
    name: 'ProgressBar',
    props: {
      segmented: {
        type: Boolean,
        required: false
      },
      currentStage: {
        type: Number,
        required: true
      },
      totalSteps: {
        type: Number,
        required: true
      },
      color: {
        type: String,
        default: '#FA476F'
      }
    },
    computed: {
      segmentStyle () { return { 'background-color': this.color } },
      mercuryStyle () { return { 'width': this.percentage + '%', 'background-color': this.color } },
      percentage () {
        const percent = (this.currentStage / this.totalSteps) * 100
        return Math.min(100, percent)
      }
    }
  }
</script>

<template>  
  <div class="progress-bar progress-bar--segmented grid-x" v-if="segmented">
    <div class="cell auto segment" v-for="n in currentStep" :style="segmentStyle"></div>
    <div class="cell auto segment" v-for="n in (totalSteps - currentStep)"></div>
  </div>
  <div class="progress-bar progress-bar--percentage" v-else>
    <div class="mercury" :style="mercuryStyle"></div>
  </div>
</template>

<style lang="css">
  .progress-bar {
    width: 100%;
    height: 6px;
    border-radius: 7px;
  }
  .progress-bar.progress-bar--percentage {
    background-color: #eff4f7;
    width: 100%;
    height: 6px;
    border-radius: 7px;
  }
  .progress-bar.progress-bar--percentage .mercury {
    height: 100%;
    border-radius: 7px;
  }
  .progress-bar.progress-bar--segmented .segment {
    background-color: #e5e7f1;
    height: 100%;
    display: flex;
    margin-right: 2px;
  }
  .progress-bar.progress-bar--segmented .segment:first-child {
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }
  .progress-bar.progress-bar--segmented .segment:last-child {
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    margin-right: 0px;
  }

</style>
