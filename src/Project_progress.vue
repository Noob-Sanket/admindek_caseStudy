<template>
    <div>
  <div class="card proj-progress-card" v-for="p in project_progress" :key="p.title">
    <div class="card-block">
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <h6>{{p.title}}</h6>
          <h5 class="m-b-30 f-w-700">
            {{p.value}}<span class="text-c-green m-l-10">{{p.percentage}}</span>
          </h5>
          <div class="progress">
            <div class="progress-bar bg-c-red" style="width: 25%"></div>
          </div>
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
      project_progress:[]
    };
  },
  created(){
    axios.get('../jsons/Project_Progress_Summary.json')
    .then (res=>{
      this.project_progress=[...res.data.project_progress]
    })
  }
};
</script>

<style scoped>
</style>