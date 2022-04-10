// 类型分配
// let x2: 'hello' = 'hello';
// x2 = 'world';

// 类型定义
function changliang(name: string, ali: 'a' | 'b' | 'c'): void {
    console.log(name, ali);
}

// changliang('a', 'a');
// changliang('a', 'aa');


interface Person2 {
    name: string;
}
function name3(x: Person2 | 'auto') {
}
name3('auto');
name3({
    name: "name1"
});
// name3({
//     name2: "name1"
// });

