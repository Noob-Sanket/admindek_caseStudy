<template>
  <div>
    <div class="card latest-update-card" >
      <div class="card-header">
        <h5>Latest Activity</h5>
        <div class="card-header-right">
          <ul class="list-unstyled card-option">
            <li class="first-opt">
              <i class="feather icon-chevron-left open-card-option"></i>
            </li>
            <li><i class="feather icon-maximize full-card"></i></li>
            <li><i class="feather icon-minus minimize-card"></i></li>
            <li><i class="feather icon-refresh-cw reload-card"></i></li>
            <li><i class="feather icon-trash close-card"></i></li>
            <li><i class="feather icon-chevron-left open-card-option"></i></li>
          </ul>
        </div>
      </div>
      <div class="card-block" >
        <div
          class="slimScrollDiv"
          style="
            position: relative;
            overflow: hidden;
            width: auto;
            height: 290px;
          "
        >
          <div
            class="scroll-widget"
            style="overflow: hidden; width: auto; height: 290px"
          >
            <div class="latest-update-box" >
              <div class="row p-t-20 p-b-30"  v-for="l in latest_activity" :key="l.activity_type">
                <div class="col-auto text-right update-meta p-r-0">
                  <i class="b-primary update-icon ring"></i>
                </div>
                <div class="col p-l-5" >
                  <a href="#!"><h6>{{l.activity_type}}</h6></a>
                  <p class="text-muted m-b-0">{{l.activity}}  <a href={{l.readmore_link}} class="text-c-blue"> Read More</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="slimScrollBar"
            style="
              background: rgb(0, 0, 0);
              width: 5px;
              position: absolute;
              top: 0px;
              opacity: 0.4;
              display: none;
              border-radius: 7px;
              z-index: 99;
              right: 1px;
              height: 186.475px;
            "
          ></div>
          <div
            class="slimScrollRail"
            style="
              width: 5px;
              height: 100%;
              position: absolute;
              top: 0px;
              display: none;
              border-radius: 7px;
              background: rgb(51, 51, 51);
              opacity: 0.2;
              z-index: 90;
              right: 1px;
            "
          ></div>
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
      latest_activity:[]
    };
  },
  created(){
    axios.get('../jsons/latest_activity.json')
    .then (res=>{
      this.latest_activity=[...res.data.latest_activity]
    })
  }
};
</script>

<style scoped>
</style>
