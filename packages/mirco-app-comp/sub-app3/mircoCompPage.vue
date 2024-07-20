<template>
    <micro-components moduleName="feedback-modal" :data="componentData" @cancel="$emit('cancel')" @ok="$emit('ok')" />
  </template>
  
  <script>
  import { GET, POST } from '@/request/axios';
  export default {
    name: 'feedback-modal-remote',
    props: {
      visible: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        requester: { GET, POST },
      };
    },
    computed: {
      componentData() {
        return {
          requester: this.requester,
          visible: this.visible,
        };
      },
    },
  };
  </script>