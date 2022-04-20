"use strict";
const db = {
    filterUser: (filter) => {
        let user1 = {
            flag: true
        };
        let user2 = {
            flag: true
        };
        return [user1, user2];
    }
};
const flagArr = db.filterUser(function () {
    return this.flag;
});
console.log("flagArr", flagArr);
// erorr 
// const flagArr2 = db.filterUser((this: User) => {
//     return this.flag;
// })
