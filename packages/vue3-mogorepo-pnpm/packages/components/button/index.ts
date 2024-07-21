
import _Transfer from './src/button.vue';
import { withInstall } from "@z-ui/utils/with-install";

const Transfer = withInstall(_Transfer);

export default Transfer; // 可以通过app.use来使用 也可以通过 import方式单独使用


// 这里添加的类型 可以再模版中被解析
declare module 'vue'{
    export interface GlobalComponents { // 我们的接口可以自动合并
        ZTransfer:typeof Transfer
    }
}