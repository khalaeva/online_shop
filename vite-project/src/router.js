import { createRouter, createWebHistory} from "vue-router";
import index from '@/Views/index.vue'

const router = createRouter({
    history: createWebHistory(), 
    routes: [
        {
            path: '/', 
            name: 'index', 
            comment: index,
        }
    ]
})

export default router;