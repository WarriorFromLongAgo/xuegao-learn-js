import { StringValidator } from "./4_接口与实现类_多文件";

const lettersRegexp = /^[A-Za-z]+$/;
export class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}