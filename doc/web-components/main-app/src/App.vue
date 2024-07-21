<template>
    <div id="app">
      <h1>Main Application</h1>
      <p>This is the content of the main application.</p>
      <!-- 引入子应用 -->
      <child-app></child-app>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  
  <style scoped>
  h1 {
    color: red;
  }
  </style>
  