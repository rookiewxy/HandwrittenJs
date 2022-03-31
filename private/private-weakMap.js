/*
 * @Description: 私有属性实现的方式
 * @Autor: wxy
 * @Date: 2022-03-31 11:13:25
 * @LastEditors: wxy
 * @LastEditTime: 2022-03-31 11:38:19
 */

// 1. WeakMap
const dongName = new WeakMap();
const dongAge = new WeakMap();

const classPrivateFieldSet = function(receiver, state, value) {
    state.set(receiver, value);
}

const classPrivateFieldGet = function(receiver, state) {
    return state.get(receiver);
}


class Dong {
    constructor () {
        dongName.set(this, void 0);
        dongAge.set(this, void 0);

        classPrivateFieldSet(this, dongName, 'dong');
        classPrivateFieldSet(this, dongAge, 20);
    }

    hello () {
        return 'I\'m ' + classPrivateFieldGet(this, dongName) + ', ' + classPrivateFieldGet(this, dongAge) + ' years old';
    }
}

const dong = new Dong();
console.log(dong.hello(), dong.name, dong.age);