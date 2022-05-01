// 构造一个类型，其所有属性都设置为可选。此实用程序将返回一个表示给定类型的所有子集的类型
interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
    title: "organize desk",
    description: "clear clutter",
};

console.log("todo1:", todo1);

const todo2 = updateTodo(todo1, {
    description: "throw out trash",
});
console.log("todo2:", todo2);
