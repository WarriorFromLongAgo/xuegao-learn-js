/**
 * 判断为空
 */
export const isEmpty = (value: string): boolean =>
    value === null ||
    value === undefined ||
    value === '' ||
    value.length === 0;

/**
 * 判断不为空
 */
export const isNotEmpty = (value: string): boolean => !isEmpty(value);

/**
 * 判断不为空
 */
export const trim = (value: string): string => {
    if (isEmpty(value)) {
        return ""
    }
    return value.trim()
}




