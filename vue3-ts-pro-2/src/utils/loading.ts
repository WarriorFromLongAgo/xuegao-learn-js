import { ElLoading } from 'element-plus'

let loading: { close: () => void; };

const openLoading = () => {
    console.log("loading.ts openLoading");
    loading = ElLoading.service({
        body: true,
        lock: true,
        text: "Loading…",
        spinner: "el- icon - loading",
        background: "rgba(255, 255, 255, 0.7)"
    })
}
function closeLoading() {
    console.log("loading.ts closeLoading");
    loading.close();
}
export {
    openLoading,
    closeLoading
}
// ————————————————
// 版权声明：本文为CSDN博主「乡村程序yuan」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/weixin_46482956/article/details/119422440