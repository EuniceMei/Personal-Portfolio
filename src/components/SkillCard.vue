<script setup>
const props = defineProps({
  img: {
    type: String,
    default: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
  },
  title: { type: String, default: 'PS' },
});
</script>

<template>
  <div class="skill-card">
    <div class="icon-wrap">
      <img :src="props.img" :alt="props.title" />
    </div>
    <span class="skill-name">{{ props.title }}</span>
  </div>
</template>

<style scoped>
.skill-card {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px 16px;
  width: 100px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: #111;
  cursor: default;
  transition: border-color 0.25s, background 0.25s, transform 0.25s;
}

.skill-card:hover {
  border-color: rgba(245, 196, 0, 0.35);
  background: rgba(245, 196, 0, 0.05);
  transform: translateY(-3px);
}

.icon-wrap {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-wrap img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.skill-name {
  font-family: 'Outfit', sans-serif;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.25s;
}

.skill-card:hover .skill-name {
  color: #F5C400;
}
</style>