<template>
  <micro-app :name="moduleName" :url="url" :data="microAppData"></micro-app>
</template>

<script>
import microApp from '@micro-zoe/micro-app';
// 本地开发模式地址不固定
const path = location.pathname.split('/').slice(0, -1).join('/');
const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8081/common-components' : `${location.origin}${path}/common-components`;
export default {
  mounted() {
    microApp.addDataListener(this.moduleName, (remoteData) => {
      if (remoteData.isEvent) {
      }
    });
  },
  computed: {
    microAppData() {
      return {
        moduleName: this.moduleName,
        data: {
          ...this.data,
        },
      };
    },
  },
};
</script>
