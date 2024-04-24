<template>
  <div>
    <div class="card table-card" >
      <div class="card-header">
        <h5>New Products</h5>
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
      <div class="card-block p-b-0">
        <div class="table-responsive">
          <table class="table table-hover m-b-0">
            <thead >
              <tr>
                <th>Name</th>
                <th>Product Code</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="n in new_products" :key="n.name">
                <td>{{n.name}}</td>
                <td>{{n.product_code}}</td>
                <td>{{n.customer}}</td>
                <td><label class="label label-danger">{{n.status}}</label></td>
                <td>
                  <a v-for="i in 5" :key="i" href="#!"><i class="fa fa-star f-12 " :class="[i<=n.rating ? 'text-c-yellow':'text-default']"></i></a>
                  
                </td>
              </tr>
            </tbody>
          </table>
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
      new_products:[]
    };
  },
  created(){
    axios.get('../jsons/new_products.json')
    .then (res=>{
      this.new_products=[...res.data.new_products]
    })
  }
};
</script>


