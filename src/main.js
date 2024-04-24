import { createApp } from 'vue'
import Summary from './Summary.vue'
import Project_progress from './Project_progress.vue'
import Whats_new from './Whats_new.vue'
import Latest_Activity from './Latest_Activity.vue'
import New_Products from "./New_Products.vue";



createApp(Summary).mount("#summary")
createApp(Project_progress).mount("#progress_project")
createApp(Whats_new).mount("#whats_new")
createApp(Latest_Activity).mount("#latest_activity")
createApp(New_Products).mount("#new_products")