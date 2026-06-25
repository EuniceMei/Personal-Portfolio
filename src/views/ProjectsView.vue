<script setup>
import { useRouter } from 'vue-router';
import ProjectCard from '@/components/ProjectCard.vue';
import { projects } from '@/assets/data/projects.js';


const router = useRouter();
const goToDetail = (id) => router.push(`/ProjectsViewDetail/${id}`);
</script>

<template>
  <div class="page">
    <div class="page-header">
      <span class="section-label">Works</span>
    </div>
    <div class="grid">
      <ProjectCard 
      v-for="project in projects" 
      :key="project.id" 
      :id="project.id" 
      :img="project.img"
      :title="project.title"
      @view-detail="goToDetail" />
       
    </div>
  </div>
</template>

<style scoped>
.page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 32px;
}

.page-header {
  margin-bottom: 48px;
}

.section-label {
  font-family: 'Outfit', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #F5C400;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.section-label::before {
  content: '';
  display: block;
  width: 28px;
  height: 1px;
  background: #F5C400;
}

h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 300;
  letter-spacing: 0.08em;
  color: #ffffff;
}

.grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
