<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import { projects } from '@/assets/data/projects';

const route = useRoute(); // useRoute() — 讀資料
const router = useRouter(); // useRouter() — 跳頁面

const project = computed(() =>
  projects.find(p => p.id === Number(route.params.id))
);
</script>

<template>
  <div class="page" v-if="project">

    <button class="back-btn" @click="router.back()">← 返回</button>

    <div class="detail-wrap">
      <div class="img-side">
        <img :src="project.img" :alt="project.title" />
      </div>

      <div class="text-side">
        <span class="section-label">Project</span>
        <h1>{{ project.title }}</h1>
        <div class="divider"></div>
        <p>{{ project.description }}</p>
        
        <!-- 技術標籤 -->
        <div class="tag-list" v-if="project.button?.length">
          <span class="tag" v-for="tag in project.button" :key="tag">{{ tag }}</span>
        </div>

        <!-- 🛠️ 新增：Demo 與 GitHub 按鈕區塊 -->
        <div class="action-links" v-if="project.liveUrl || project.githubUrl">
          <a 
            v-if="project.liveUrl" 
            :href="project.liveUrl" 
            target="_blank" 
            class="action-btn demo-btn"
          >
            Demo
          </a>
          <a 
            v-if="project.githubUrl" 
            :href="project.githubUrl" 
            target="_blank" 
            class="action-btn github-btn"
          >
            GitHub
          </a>
        </div>

      </div>
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
 
.detail-wrap {
  display: flex;
  gap: 60px;
  align-items: flex-start;
}
 
.img-side {
  flex: 1;
  max-width: 420px;
}
 
.img-side img {
  width: 100%;
  display: block;
  border: 1px solid rgba(255, 255, 255, 0.08);
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
 
/* 技術標籤 */
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

/* 🛠️ 新增：按鈕區塊樣式 */
.action-links {
  display: flex;
  gap: 12px;
  margin-top: 36px;
  max-width: 320px; /* 限制按鈕最大寬度，避免拉得太長 */
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

/* Demo 按鈕：金底黑字高亮 */
.demo-btn {
  background: #F5C400;
  color: #111;
}

.demo-btn:hover {
  background: #ffffff;
  color: #111;
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.1);
}

/* GitHub 按鈕：低調白線條框 */
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
</style>
