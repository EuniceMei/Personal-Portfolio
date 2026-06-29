<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="nav">
    <div class="nav-logo">程勝美 Portfolio</div>
    <div class="nav-links">
      <RouterLink to="/">首頁</RouterLink>
      <RouterLink to="/SkillView">技能</RouterLink>
      <RouterLink to="/ProjectsView">作品</RouterLink>
    </div>
  </nav>
</template>

<style scoped>

body,html{
  margin: 0;
  padding: 0;
}
.nav {
  margin: 0;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.nav-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  font-weight: 600;
  color: #F5C400;
  letter-spacing: 0.05em;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-links a {
  font-family: 'Outfit', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  position: relative;
  transition: color 0.25s;
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: #F5C400;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
/* 每個 <a> 後面都會各自有一條底線，hover 時才滑出來。 */

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #F5C400;
}
/* 底線一直在（router-link-active） */

.nav-links a.router-link-active::after,
.nav-links a:hover::after {
  width: 100%;
}
</style>
