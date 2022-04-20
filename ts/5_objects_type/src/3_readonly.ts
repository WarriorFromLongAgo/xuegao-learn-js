interface readOnly {
    readonly x: number;
}

function name3(obj: readOnly) {
    console.log(obj);
    // obj.x = 100
}

interface Home {
    readonly desk: {
        x: number;
        y: number;
    }
}

function nume33(home: Home) {
    console.log(home);
    console.log(home.desk);
    home.desk.x = 100

    // error
    // home.desk = {
    //     x: 100,
    //     y: 200
    // }
}