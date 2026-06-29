<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ProjectCard from '@/components/ProjectCard.vue';
import { projects } from '@/assets/data/projects.js';

const router = useRouter();
const route = useRoute();
const activeCategory = ref(
  typeof route.query.category === 'string' && ['all', 'web', 'graphic'].includes(route.query.category)
    ? route.query.category
    : 'all'
);

watch(activeCategory, (value) => {
  router.replace({
    path: '/ProjectsView',
    query: value !== 'all' ? { category: value } : {},
  });
});

const categories = [
  { value: 'all', label: '全部' },
  { value: 'web', label: '網頁設計' },
  { value: 'graphic', label: '平面設計' },
];

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects;
  return projects.filter((project) => project.category === activeCategory.value);
});

const goToDetail = (id) => {
  router.push({
    path: `/ProjectsViewDetail/${id}`,
    query: { category: activeCategory.value },
  });
};
</script>

<template>
  <div class="page">
    <div class="page-header">
      <span class="section-label">Works</span>
    </div>

    <div class="filter-bar">
      <button
        v-for="item in categories"
        :key="item.value"
        class="filter-btn"
        :class="{ active: activeCategory === item.value }"
        @click="activeCategory = item.value"
      >
        {{ item.label }}
      </button>
    </div>

    <div v-if="filteredProjects.length" :class="['grid', { graphic: activeCategory === 'graphic' }]">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.id"
        :id="project.id"
        :img="project.img"
        :title="project.title"
        :category="project.category"
        :compactGraphic="project.category === 'graphic' && activeCategory === 'all'"
        @view-detail="goToDetail"
      />
    </div>
    <div v-else class="empty-state">目前沒有這個分類的作品。</div>
  </div>
</template>

<style scoped>
.page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 60px 32px;
}

.page-header {
  margin-bottom: 24px;
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

.filter-bar {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.filter-btn {
  border: 1px solid rgba(245, 196, 0, 0.4);
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  padding: 8px 16px;
  border-radius: 999px;
  font-family: 'Outfit', sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background: #F5C400;
  color: #111;
  border-color: #F5C400;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px 30px;
  justify-content: center;
}

.grid.graphic {
  grid-template-columns: repeat(3, minmax(212px, 1fr));
  gap: 30px;
}

@media (max-width: 800px) {
  .grid.graphic {
    grid-template-columns: repeat(2, minmax(212px, 1fr));
  }
}

@media (max-width: 430px) {
  .grid.graphic {
    grid-template-columns: 1fr;
  }
}

.empty-state {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  padding: 24px 0;
  font-family: 'Outfit', sans-serif;
  letter-spacing: 0.08em;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: minmax(0, 450px);
    gap: 32px;
  }

  .page {
    padding: 48px 24px;
  }
}
</style>
