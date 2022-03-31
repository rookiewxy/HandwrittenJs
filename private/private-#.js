/*
 * @Description: 私有属性实现的方式
 * @Autor: wxy
 * @Date: 2022-03-31 11:13:25
 * @LastEditors: wxy
 * @LastEditTime: 2022-03-31 11:40:04
 */

// 1. #prop就是weakMap的语法糖
class Dong {
    constructor() {
        this.#name = 'dong';
        this.#age = 20;
        this.friend = 'guang';
    }
    hello() {
        return 'I\'m ' + this.#name + this.#age + 'years old';
    }
}
const dong = new Dong();
console.log(dong.hello(), dong.name, dong.age);