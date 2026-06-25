import FranceImg from '@/assets/img/France.jpg';
import FranceSpotImg from '@/assets/img/FranceSpot.jpg';
import CarImg from '@/assets/img/car.jpg';
import iCultureImg from '@/assets/img/iCulture.png';

export const projects = [
  { 
    id: 1, 
    title: '文化部iCulture改版', 
    img: iCultureImg, 
    description: '將原本不易查詢的網站改變為容易上手並想常來逛的網站',
    button: ['Vue.js', 'CSS', 'HTML'],  
    liveUrl: 'https://nchu-11503-iculture.dev-hub.io/?openExternalBrowser=1', 
  },
  { 
    id: 2, 
    title: '法國景點收藏', 
    img: FranceSpotImg, 
    description: '可選擇你喜歡的法國地點收藏。',
    button: ['CSS', 'HTML'],    
    liveUrl: 'https://example.com', 
    githubUrl: 'https://eunicemei.github.io/France-Collection/',    
  },
  { 
    id: 3, 
    title: '購物車', 
    img: CarImg, 
    description: '可選擇你要的產品與數量，最後計算總金額。',
   button: ['Vue.js', 'CSS', 'HTML'],      
    liveUrl: 'https://example.com', 
    githubUrl: 'https://github.com'             
  },
   { 
    id: 4, 
    title: '法國旅遊導覽', 
    img: FranceImg, 
    description: '法國旅遊可以選擇你想要去的地點',
    button: ['Vue.js', 'CSS', 'HTML'],  
    liveUrl: 'https://example.com', 
    githubUrl: 'https://github.com'  
  },
];