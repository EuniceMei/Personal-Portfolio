<script setup>
import ProfileCard from '@/components/ProfileCard.vue';
import SkillCard from '@/components/SkillCard.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import { projects } from '@/assets/data/projects.js';
import { useRouter } from 'vue-router';

const router = useRouter();
const goToDetail = (id) => router.push(`/ProjectsViewDetail/${id}`);

const skills = [
  { title: 'HTML',       img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { title: 'CSS',        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { title: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { title: 'Vue.js',     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { title: 'Git',        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { title: 'Figma',      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { title: 'Illustrator',img: 'https://cdn-1.webcatalog.io/catalog/adobe-illustrator/adobe-illustrator-icon-filled-256.webp?v=1779064239607' },
  { title: 'Photoshop',  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
];
</script>

<template>
  <main>
    <!-- 首頁區塊 -->
    <section id="home">
      <ProfileCard />
    </section>

    <!-- 技能區塊 -->
    <section id="skills" class="page">
      <div class="page-header">
        <span class="section-label">Skills</span>
      </div>
      <div class="skills-grid">
        <SkillCard
          v-for="skill in skills"
          :key="skill.title"
          :img="skill.img"
          :title="skill.title"
        />
      </div>
    </section>

    <!-- 作品區塊 -->
    <section id="works" class="page">
      <div class="page-header centered">
        <span class="section-label">Works</span>
      </div>
      <div class="works-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :id="project.id"
          :img="project.img"
          :title="project.title"
          @view-detail="goToDetail"
        />
      </div>
    </section>
  </main>
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

.page-header.centered {
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

/* Skills 用 flex 排列 */
.skills-grid {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* Works 用 grid 排列 */
.works-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 400px));
  gap: 40px 30px;
  justify-content: center;
}

@media (max-width: 768px) {
  .works-grid {
    grid-template-columns: minmax(0, 450px);
    gap: 32px;
  }
  .page {
    padding: 48px 24px;
  }
}
</style>