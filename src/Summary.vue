<template>
  <div>
  <div class="card comp-card" v-for="s in summary" :key="s.title">
    <div class="card-body">
      <div class="row align-items-center">
        <div class="col">
          <h6 class="m-b-25">{{ s.title }}</h6>
          <h3 class="f-w-700 text-c-blue">{{ s.value }}</h3>
          <p class="m-b-0">{{s.duration}} ({{ s.year }})</p>
        </div>
        <div class="col-auto">
          <i class="fas fa-eye bg-c-blue"></i>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      summary:[]
    };
  },
  created(){
    axios.get('../jsons/summary.json')
    .then (res=>{
      this.summary=[...res.data.summary]
    })
  }
};
</script>

<style scoped>
</style>