"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function promiseAll(promises) {
    return __awaiter(this, void 0, void 0, function* () {
        const results = [];
        for (let i = 0; i < promises.length; i++) {
            let res = yield promises[i].then(res => res).catch((error) => { return Promise.reject(error); });
            results.push(res);
        }
        return Promise.resolve(results);
    });
}
const promiseA = new Promise((res) => setTimeout(() => res(123), 1000));
const promiseB = Promise.resolve("a");
const promiseC = new Promise((res) => setTimeout(() => res(true), 100));
const promiseD = new Promise((res, rej) => setTimeout(() => rej("error"), 1000));
Promise.all([promiseA, promiseB, promiseC]).then(console.log);
promiseAll([promiseA, promiseB, promiseC]).then(console.log).catch(() => { });
Promise.all([promiseA, promiseB, promiseD]).catch(console.error);
promiseAll([promiseA, promiseB, promiseD]).catch(console.error);
