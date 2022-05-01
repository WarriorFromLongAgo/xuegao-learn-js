// 构造一个类型，该类型由 set to required 的所有属性组成。部分相反。

interface Props {
    a?: number;
    b?: string;
}

// const obj: Props = { a: 5 };
// const obj2: Required<Props> = { a: 5 };

