<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import { projects } from '@/assets/data/projects';

const route = useRoute();
const router = useRouter();

const project = computed(() =>
  projects.find(p => p.id === Number(route.params.id))
);

const currentCategory = computed(() => {
  const value = route.query.category;
  return ['all', 'web', 'graphic'].includes(value) ? value : 'all';
});

// 敘事欄位設定：對應資料裡的 key
const storySections = [
  { key: 'why', label: '為什麼做這' },
  { key: 'role', label: '我負責什麼' },
  { key: 'ai', label: '怎麼跟 AI 合作' },
  { key: 'highlight', label: '這裡最厲害' },
  { key: 'learn', label: '我學到什麼' },
  { key: 'next', label: '下一步計畫' },
];
</script>

<template>
  <div class="page" v-if="project">

    <button
      class="back-btn"
      @click="router.push({ path: '/ProjectsView', query: currentCategory === 'all' ? {} : { category: currentCategory } })"
    >
      ← 返回
    </button>

    <div class="project-box">
      <div class="detail-wrap">
        <div class="img-side">
          <img :src="project.img" :alt="project.title" />
        </div>

        <div class="text-side">
          <span class="section-label">Project</span>
          <h1>{{ project.title }}</h1>
          <div class="divider"></div>
          <p>{{ project.description }}</p>

          <div class="tag-list" v-if="Array.isArray(project.button) && project.button.length">
            <span class="tag" v-for="tag in project.button" :key="tag">{{ tag }}</span>
          </div>

          <div class="action-links" v-if="project.liveUrl || project.githubUrl">
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" class="action-btn demo-btn">
              Demo
            </a>
            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="action-btn github-btn">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="story-list">
      <template v-for="section in storySections" :key="section.key">
        <div class="story-box">
          <span class="story-label">{{ section.label }}</span>
          <p class="story-text" v-if="project[section.key]">
            {{ project[section.key] }}
          </p>
          <p class="story-text no-data" v-else>
            暫無資料
          </p>
        </div>
      </template>
    </div>
  </div>

  <div class="page not-found" v-else>
    <p>找不到此作品</p>
  </div>
</template>

<style scoped>
.page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 48px 32px;
}

.back-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Outfit', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  padding: 8px 20px;
  cursor: pointer;
  margin-bottom: 48px;
  transition: border-color 0.25s, color 0.25s;
}

.back-btn:hover {
  border-color: #F5C400;
  color: #F5C400;
}

.project-box {
  border: none;
  border-radius: 18px;
  padding: 32px;
  background: transparent;
  margin-bottom: 32px;
}

.detail-wrap {
  display: flex;
  gap: 60px;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 900px;
}

.img-side {
  flex: 1;
  max-width: 420px;
}

.img-side img {
  width: 100%;
  display: block;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
}

.story-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 24px auto 0;
  width: 100%;
  max-width: 900px;
}

.story-box {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  padding: 16px 18px;
  background: rgba(255, 255, 255, 0.02);
  transition: border-color 0.25s, background 0.25s;
}

.story-box:hover {
  border-color: rgba(245, 196, 0, 0.35);
  background: rgba(255, 255, 255, 0.035);
}

.story-label {
  font-family: 'Outfit', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #F5C400;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.story-label::before {
  content: '';
  display: block;
  width: 18px;
  height: 1px;
  background: #F5C400;
}

.story-text {
  font-family: 'Outfit', sans-serif;
  font-size: 0.85rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.55);
}

.story-text.no-data {
  opacity: 0.3;
}

.text-side {
  flex: 1;
  padding-top: 8px;
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
  margin-bottom: 16px;
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
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 300;
  letter-spacing: 0.08em;
  color: #ffffff;
  line-height: 1.2;
}

.divider {
  width: 32px;
  height: 1px;
  background: #F5C400;
  opacity: 0.5;
  margin: 24px 0;
}

p {
  font-family: 'Outfit', sans-serif;
  font-size: 0.9rem;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.5);
}

.tag-list {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.tag {
  font-family: 'Outfit', sans-serif;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  color: rgba(255, 255, 255, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  padding: 5px 14px;
  transition: color 0.2s, border-color 0.2s;
}

.tag:hover {
  color: #F5C400;
  border-color: rgba(245, 196, 0, 0.4);
}

.action-links {
  display: flex;
  gap: 12px;
  margin-top: 36px;
  max-width: 320px;
  justify-content: flex-start;
}

.story-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  max-width: 900px;
}

.action-btn {
  flex: 1;
  text-align: center;
  padding: 10px 0;
  font-family: 'Outfit', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.demo-btn {
  background: #F5C400;
  color: #111;
}

.demo-btn:hover {
  background: #ffffff;
  color: #111;
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
}

.github-btn {
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.github-btn:hover {
  color: #ffffff;
  border-color: #ffffff;
  background: rgba(255, 255, 255, 0.04);
}

@media (max-width: 768px) {
  .detail-wrap {
    flex-direction: column;
    gap: 40px;
  }

  .img-side {
    max-width: 100%;
  }

  .action-links {
    max-width: 100%;
    width: 100%;
  }
}
</style>
