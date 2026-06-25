import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import SkillView from '@/views/SkillView.vue';
import ProjectDetailView from '@/views/ProjectDetailView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/SkillView',
      component: SkillView,
    },

    {
      path: '/ProjectsView',
      component: ProjectsView,
    },

    {
      path: '/ProjectsViewDetail/:id',
      component: ProjectDetailView,
    },
  ],
})

export default router
