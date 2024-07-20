import microApp from '@micro-zoe/micro-app';
// 与基座进行数据交互
function handleMicroData() {
    // 是否是微前端环境
    if (window.__MICRO_APP_ENVIRONMENT__) {
      // 主动获取基座下发的数据
      const appData = window.microApp.getData() || {};
      console.log('微组件数据加载', window.microApp.getData());
      postData(appData);
  
      // 监听基座下发的数据变化
      window.microApp.addDataListener((newData) => {
        console.log('微组件数据更新', newData);
        postData(newData);
      });
    }
  }
  
  function postData(componentData) {
    window.moduleName = componentData.moduleName;
    window.componentData = componentData.data || {};
    window.postMessage({ type: 'componentDataChange', data: { moduleName: componentData.moduleName } });
  }
  microApp.start({
    fetch(url, options) {
      let innerUrl = url;
      // 对url做一些兼容，框架会自动在url后面加上'/',然后就会导致资源请求不到，同时就会导致请求的静态资源多了一层'common-components'
      if (url.slice(-1) === '/') {
        innerUrl = url.slice(0, -1);
      }
      const reg = new RegExp('/common-components/common-components/');
      if (reg.test(url)) {
        innerUrl = url.replace('common-components/', '');
      }
      return window.fetch(innerUrl, Object.assign(options)).then((res) => {
        return res.text();
      });
    },
  });