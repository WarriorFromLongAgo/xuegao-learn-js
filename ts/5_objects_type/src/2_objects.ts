type Shape1 = {}

interface Options {
    shape: Shape1,
    x1: number,
    y1: number
}

function shapeFn(opt: Options) {
}

const shape: Shape1 = {}
// error
// shapeFn({shape})
shapeFn({shape, x1: 10, y1: 20})