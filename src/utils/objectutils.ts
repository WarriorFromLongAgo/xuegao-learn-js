/**
 * 判断为空
 */
export const isEmpty = (value: any) =>
    value === null ||
    value === undefined ||
    value === '' ||
    value === {} ||
    value === [] ||
    value.length === 0;

/**
 * 判断不为空
 */
export const isNotEmpty = (value: any) => !isEmpty(value);

console.log(isEmpty("asaassa"))
console.log(isEmpty(""))
