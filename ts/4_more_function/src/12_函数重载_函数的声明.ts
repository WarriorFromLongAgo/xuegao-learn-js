interface User {
    flag: boolean;
}

interface DB {
    filterUser(filter: (this: User) => boolean): User[]
}

const db: DB = {
    filterUser: (filter: (this: User) => boolean) => {
        let user1: User = {
            flag: true
        }
        let user2: User = {
            flag: true
        }
        return [user1, user2];
    }
}

const flagArr = db.filterUser(function (this: User) {
    return this.flag;
})
console.log("flagArr", flagArr);

// erorr 
// const flagArr2 = db.filterUser((this: User) => {
//     return this.flag;
// })
