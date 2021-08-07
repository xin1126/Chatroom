import { createApp } from 'vue';
import routers from './routes';
import App from './App.vue';
import './index.css';

createApp(App)
  .use(routers)
  .mount('#app');
