// 参数不正确
// 参数类型不正确
// 返回类型不正确

function fn(x: string): void
function hello() {
}
fn(" 1 ");
// eorror
// fn();


function fn2(x: string): void
function fn2(x: boolean): void
function fn2(x: boolean | string) {

}




