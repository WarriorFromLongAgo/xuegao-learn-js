import helloWorld2 from "./2_ts模块";
import { pi, phi } from "./2_ts模块";
import { absolute } from "./2_ts模块";
// import { pi as π } from "./2_ts模块";
import RandomNumberGenerator, { pi as π } from "./2_ts模块";

console.log(π);
helloWorld2();
console.log(pi);
const absPhi = absolute(phi);
console.log(absPhi);

RandomNumberGenerator;
console.log("RandomNumberGenerator", RandomNumberGenerator);
