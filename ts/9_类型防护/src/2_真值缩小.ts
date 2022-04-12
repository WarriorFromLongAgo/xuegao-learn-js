function a2(values: number[] | undefined, factor: number) {
    // 如果values不存在
    if (!values) {
        return values;
    }
    return values.map(v => v * factor);
}

a2([1, 2, 3], 2);