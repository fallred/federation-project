<template>
    <component :is="curComponents" v-bind="{ ...innerData }" @customEvent="onCustomEvent" />
  </template>
  
  <script>
  import feedback from './components/feedback.vue';
  import feedbackModal from './components/feedbackModal.vue';
  const componentsMap = {
    feedback,
    'feedback-modal': feedbackModal,
  };
  export default {
    name: 'exporter',
    data() {
      return {
        innerData: {},
        curModuleName: '',
      };
    },
    mounted() {
      window.addEventListener('message', (e) => {
        const { type, data } = e.data;
        if (type === 'componentDataChange' && window.moduleName === data.moduleName) {
          this.curModuleName = window.moduleName;
          this.innerData = window.componentData;
          console.log(`微组件${this.curModuleName}渲染成功`);
        }
      });
    },
    destroyed() {
      console.log('destroyed');
      window.removeEventListener('message');
    },
    computed: {
      curComponents() {
        return componentsMap[this.curModuleName] || null;
      },
    },
  };
  </script>