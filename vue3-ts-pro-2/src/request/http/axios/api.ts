// // 其中使用 install 的目的在于 ts在main.ts中 
// // 不能通过Vue.prototype.$Api这个方式直接调用
// //，在全局方法中会说到使用 插件的方式去挂载。
// // api.ts
// import { Base } from "./base";
// import { Request } from "./request";

// class api {
//   /* api接口模块 */
//   public static article = {
//     // 直接在index.ts中设置不需要Base模块
//     genre: () => Request.get('/api/SnArticle/GetCountAsync'),
//     // 基于Base模块封装调用
//     genres: () => Request.get(`${Base.env}/api/SnArticle/GetCountAsync`),
//   }
// }
// export {
//   api
// }
