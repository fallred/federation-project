import microApp from '@micro-zoe/micro-app';
import MicroComponents from './microComponents.vue';
import Vue from 'vue';

Vue.component('micro-components', MicroComponents);

microApp.start({
  ...
});
