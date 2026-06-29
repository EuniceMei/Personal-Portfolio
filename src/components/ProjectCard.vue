<script setup>
import defaultIMG from '@/assets/img/France.png';

const props = defineProps({
  id: { type: Number, required: true },
  img: { type: String, default: defaultIMG },
  title: { type: String, default: '範例' },
  category: { type: String, default: '' },
  liveUrl: { type: String, default: '' },
  githubUrl: { type: String, default: '' },
  compactGraphic: { type: Boolean, default: false },
});

const emit = defineEmits(['view-detail']);
const clickBtn = () => emit('view-detail', props.id);
</script>

<template>
  <div class="card" :class="{ graphic: props.category === 'graphic', compactGraphic: props.compactGraphic }" @click="clickBtn">
    <div class="img-wrap">
      <img :src="props.img" alt="作品圖" />
      <div class="overlay">
        <span class="view-text">查看作品</span>
      </div>
    </div>

    <div class="card-footer">
      <span class="card-title">{{ props.title }}</span>
      <span class="card-arrow">→</span>
    </div>

  <!-- 👈 新增下方按鈕區塊，並使用 @click.stop 阻止卡片被觸發 -->
  <div class="card-links" @click.stop>
    <a v-if="props.liveUrl" :href="props.liveUrl" target="_blank" class="link-btn live-btn">
      線上網站
    </a>
    <a v-if="props.githubUrl" :href="props.githubUrl" target="_blank" class="link-btn github-btn">
      GitHub
    </a>
  </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  max-width: var(--card-width, 400px);
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: #111;
  transition: border-color 0.3s, transform 0.3s;
}

.card:hover {
  border-color: rgba(245, 196, 0, 0.4);
  transform: translateY(-4px);
}

.img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: var(--img-aspect-ratio, 4 / 3);
  overflow: hidden;
}

/* 預設平面設計卡片維持原本小尺寸 */
.card.graphic {
  --card-width: 212px;
}

.card.graphic .img-wrap {
  --img-aspect-ratio: 210 / 297;
}

/* 在「全部」分類時，平面設計卡片會使用網頁卡片尺寸 */
.card.compactGraphic {
  --card-width: 400px;
}

.card.compactGraphic .img-wrap {
  --img-aspect-ratio: 4 / 3;
}

.img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  /* cubic-bezier 是 CSS 動畫的速度曲線函數，用來控制動畫快慢的節奏。
  四個數字代表一條曲線的兩個控制點，決定動畫從開始到結束的加速節奏。 */
}

.card:hover .img-wrap img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 10, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.card:hover .overlay {
  opacity: 1;
}

.view-text {
  font-family: 'Outfit', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #F5C400;
  border: 1px solid #F5C400;
  padding: 8px 20px;
}

.card-footer {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.card-title {
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.05em;
  flex: 1;
}

.card-arrow {
  font-size: 0.85rem;
  color: #F5C400;
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.3s, transform 0.3s;
}

.card:hover .card-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* 新增：連結按鈕容器 */
.card-links {
  display: flex;
  gap: 12px;
  padding: 0 14px 14px 14px;
  /* 留出精緻的內邊距 */
  background: #111;
}

/* 新增：按鈕共同基礎樣式 */
.link-btn {
  flex: 1;
  text-align: center;
  padding: 8px 0;
  font-family: 'Outfit', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.3s, color 0.3s, border-color 0.3s;
}

/* 新增：線上網站按鈕（金色實心） */
.live-btn {
  background: #F5C400;
  color: #111;
  font-weight: 600;
}

.live-btn:hover {
  background: #fff;
  color: #111;
}

/* 新增：GitHub 按鈕（邊框線條） */
.github-btn {
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.github-btn:hover {
  color: #fff;
  border-color: #fff;
  background: rgba(255, 255, 255, 0.05);
}
</style>
