async function promiseAll(promises: Promise<any>[]) {
    const results: any[] = []
    for (let i = 0; i < promises.length; i++) {
        let res = await promises[i].then(res=>res).catch((error)=>{return Promise.reject(error)})
        results.push(res)
    }
    return Promise.resolve(results);
}

const promiseA = new Promise((res) => setTimeout(() => res(123), 1000));
const promiseB = Promise.resolve("a");
const promiseC = new Promise((res) => setTimeout(() => res(true), 100));
const promiseD = new Promise((res, rej) =>
    setTimeout(() => rej("error"), 1000)
);

Promise.all([promiseA, promiseB, promiseC]).then(console.log);
promiseAll([promiseA, promiseB, promiseC]).then(console.log).catch(()=>{});
Promise.all([promiseA, promiseB, promiseD]).catch(console.error);
promiseAll([promiseA, promiseB, promiseD]).catch(console.error);

