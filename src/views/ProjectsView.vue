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
  /* 💡 讓標題區塊與下方的置中卡片對齊 */
  max-width: 830px; 
  margin-left: auto;
  margin-right: auto;
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

/* 💡 核心修改：兩張一排、置中、中間間距 30px */
.grid {
  display: grid;
  /* 💡 一排固定兩欄，每張卡片最大寬度限制在 400px（可依據實測畫面微調） */
  grid-template-columns: repeat(2, minmax(0, 400px)); 
  /* 💡 關鍵：左右間距固定 30px，上下間距設定為 40px */
  gap: 40px 30px; 
  /* 💡 關鍵：讓整個兩欄網格在畫面上水平置中 */
  justify-content: center; 
}

/* 💡 RWD 響應式斷點設定 */

/* 當螢幕小於平板/手機尺寸時（768px 以下）：自動切換成一排一張置中 */
@media (max-width: 768px) {
  .grid {
    /* 💡 改為單欄置中，限制最大寬度避免在手機上拉得太長變形 */
    grid-template-columns: minmax(0, 450px); 
    gap: 32px;
  }
  .page {
    padding: 48px 24px; /* 稍微縮減手機版的左右留白 */
  }
}
</style>
