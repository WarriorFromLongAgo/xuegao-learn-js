type describableFunction = {
    desc: string
    (someArg: number): boolean
}

function doSome(fn: describableFunction) {
    console.log(fn.desc + " this " + fn(1));
}
function fn1(n: number) {
    console.log(n);
    return n > 0;
}
fn1.desc = "fn1-hello";
doSome(fn1);