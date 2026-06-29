<script setup>
import SkillCard from '@/components/SkillCard.vue';
import responsiveImg from '@/assets/img/responsive.png';

const skills = [
    { title: 'HTML', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { title: 'CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { title: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { title: 'Vue.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { title: 'RWD', img: responsiveImg },
    { title: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { title: 'Figma', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    {
        title: 'Illustrator', img: 'https://cdn-1.webcatalog.io/catalog/adobe-illustrator/adobe-illustrator-icon-filled-256.webp?v=1779064239607'
    },
    {
        title: 'Photoshop', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg'
    },
]

</script>

<template>
    <div class="page">
        <div class="page-header">
            <span class="section-label">Skills</span>
        </div>
        <div class="grid">
            <SkillCard v-for="skill in skills" :key="skill.title" :img="skill.img" :title="skill.title" />

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
    gap: 16px;
    flex-wrap: wrap;
}
</style>
