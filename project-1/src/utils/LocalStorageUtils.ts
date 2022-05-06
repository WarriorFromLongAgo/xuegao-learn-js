class DataHelper {
    dataKey: string;
    primaryKey: string;
    constructor(dataKey: string, primaryKey: string) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }

    readData(): any {
        // 读取本地数据
        let strData: string | null = localStorage.getItem(this.dataKey);

        let arrData: any = [];

        if (strData != null) {
            arrData = JSON.parse(strData);
        }

        return arrData;
    }


    saveData(arrData: Array<Object>): void {
        let str: string = JSON.stringify(arrData);
        localStorage.setItem(this.dataKey, str);
    }


    addData(inputStr: string): number {
        let arr: any = this.readData();

        let obj: any = {
            content: inputStr
        }

        let newId: number = arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1;

        // let newId = arr.length > 0
        //     ? arr[arr.length - 1][this.primaryKey] + 1
        //     : 1;

        obj[this.primaryKey] = newId;

        arr.push(obj);

        this.saveData(arr);

        return -1
    }

    removeDataById(id: string | number): boolean {
        // 读取本地数组
        let arr = this.readData()
        // 查找要删除评论对象的下标，并保存到本地
        let index = arr.findIndex((ele: any) => {
            return ele[this.primaryKey] == id
        })
        if (index > -1) {
            arr.splice(index, 1)
            this.saveData(arr)
            return true
        }
        return false
    }
}