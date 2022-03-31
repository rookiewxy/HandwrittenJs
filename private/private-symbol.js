/*
 * @Description: 私有属性实现的方式
 * @Autor: wxy
 * @Date: 2022-03-31 11:13:25
 * @LastEditors: wxy
 * @LastEditTime: 2022-03-31 11:33:53
 */

// 1. Symbol
const nameSymbol = Symbol('name');
const ageSymbol = Symbol('age');

class Dong {
    constructor() {
        this[nameSymbol] = 'dong';
        this[ageSymbol] = 20;
    }

    hello() {
        return 'I\'m ' + this[nameSymbol] + ', '  + this[ageSymbol] + ' years old';
    }
    get name(){
      return this[nameSymbol]
    }
}

const dong = new Dong();
const [s1, s2] = Object.getOwnPropertySymbols(dong)
console.log(dong.hello(),dong[s1], dong[s2]);