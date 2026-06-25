import VipImg from '@/assets/img/Vip.png';
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
    title: '景點收藏展示館', 
    img: FranceSpotImg, 
    description: '可選擇你喜歡的地點收藏，讓下次想去時更方便找到你想去的地方！',
    button: ['JS', 'CSS', 'HTML'],    
    liveUrl: 'https://eunicemei.github.io/France-Collection/', 
    githubUrl: 'https://github.com/EuniceMei/France-Collection.git',    
  },
  { 
    id: 3, 
    title: '購物車', 
    img: CarImg, 
    description: '可選擇你要的產品與數量，最後計算總金額。',
   button: ['JS', 'CSS', 'HTML'],      
    liveUrl: 'https://eunicemei.github.io/Shopping-Cart/', 
    githubUrl: 'https://github.com/EuniceMei/Shopping-Cart.git',             
  },
   { 
    id: 4, 
    title: '會員小卡', 
    img: VipImg, 
    description: '輸入您的名字年齡，可出現個人會員小卡',
    button: ['JS', 'CSS', 'HTML'],  
    liveUrl: 'https://example.com', 
    githubUrl: 'https://github.com',  
  },
];