function a3(x: string | number, y: string | boolean) {
    if (x === y) {
        x.toUpperCase();
        y.toUpperCase();
    }

    console.log(typeof x);
    console.log(typeof y);

    if ((typeof x) === (typeof y)) {
        // x.toUpperCase();
        // y.toUpperCase();
    } else {
        console.log(x);
        console.log(y)
    }
}

a3('a', 'a');