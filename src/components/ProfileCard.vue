<script setup>
import profile from '@/assets/img/profile.jpg';
</script>

<template>
  <div class="container">
    <div class="profile-card">

      <div class="accent-bar"></div>

      <div class="inner">
        <div class="top-row">
          <div class="text-block">
            <span class="label">Portfolio</span>
            <h1>程勝美</h1>
            <h2>Eunice Cheng</h2>
            <h3>轉職UI/UX前端工程師</h3>
          </div>
          <div class="photo-wrap">
            <img :src="profile" alt="個人照" />
            <div class="photo-border"></div>
          </div>
        </div>

        <div class="divider"></div>
        <p class="bio">
          「具備平面設計與程式開發能力，可獨立完成網頁製作。擅長平面設計、影片後製與數位內容規劃。曾於巴黎留學飽受美學薰陶，結合設計美感與技術能力，致力打造兼具視覺與使用體驗的網頁。」
        </p>
      </div>

    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 80px 32px;
  min-height: 100vh;
}

.profile-card {
  position: relative;
  width: 380px;
  background: #111111;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 2px;
  overflow: hidden;
  animation: fadeUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) both;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

.accent-bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #F5C400;
}

.inner {
  padding: 32px 28px 28px 36px;
}

.label {
  font-size: 0.65rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #F5C400;
  font-family: 'Outfit', sans-serif;
  font-weight: 500;
  display: block;
  margin-bottom: 12px;
}

.top-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}

.text-block {
  flex: 1;
}

h1 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: #ffffff;
  line-height: 1.1;
}

h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #F5C400;
  margin-top: 4px;
}

h3 {
  font-family: 'Outfit', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255);
  margin-top: 8px;
}

.photo-wrap {
  position: relative;
  flex-shrink: 0;
}

.photo-wrap img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  position: relative;
  z-index: 1;
}

.photo-border {
  position: absolute;
  top: -5px;
  right: -5px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 1px solid rgba(245, 196, 0, 0.4);
  z-index: 0;
}

.divider {
  width: 40px;
  height: 1px;
  background: #F5C400;
  margin: 24px 0;
  opacity: 0.6;
}

.bio {
  font-family: 'Outfit', sans-serif;
  font-size: 0.85em;
  line-height: 1.9;
  color: rgba(255, 255, 255);
  font-style: italic;
  letter-spacing: 0.02em;
    opacity: 0.75;
}
</style>
