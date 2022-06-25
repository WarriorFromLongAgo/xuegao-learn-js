import {computed} from 'vue'
import {mapState, useStore} from 'vuex'

// export function useState(mapper: []) {
//     // 拿到store独享
//     const store = useStore()
//
//     // 获取到对应的对象的functions: {name: function, age: function}
//     const storeStateFns = mapState(mapper)
//
//     // 对数据进行转换
//     const storeState = {}
//     Object.keys(storeStateFns).forEach(fnKey => {
//         const fn = storeStateFns[fnKey].bind({$store: store})
//         storeState[fnKey] = computed(fn)
//     })
//
//     return storeState
// }


// 用的时候，直接如下所示
// <template>
//     <div>
//         <h2>{{count}}</h2>
// <h2>{{name}}</h2>
// <h2>{{age}}</h2>
// </div>
// </template>
// <script>
// import {useState} from '引入刚刚封装的useState.js文件'
// export default {
//     setup(){
//         const storeState = useState(['count','name','age'])
//
//         return {
//             ...storeState
//         }
//     }
// }
// </script>




// ————————————————
// 版权声明：本文为CSDN博主「小王同学｜」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/W_Zhulin/article/details/124333887
