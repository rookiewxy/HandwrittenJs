/*
 * @Description: 私有属性实现的方式
 * @Autor: wxy
 * @Date: 2022-03-31 11:13:25
 * @LastEditors: wxy
 * @LastEditTime: 2022-03-31 11:32:22
 */

// 1. Proxy
class Dong {
  constructor() {
      this._name = 'dong';
      this._age = 20;
      this.friend = 'guang';
  }

  hello() {
      return 'I\'m ' + this._name + ', '  + this._age + ' years old';
  }
}
const dong = new Dong();
 
const handler = {
    get(target, prop) {
      console.log(typeof target[prop])
        if (prop.startsWith('_')) {
            return;
        }
        if(typeof target[prop] === 'function'){
          return target[prop].bind(target)
        }
        return target[prop];
   },
   set(target, prop, value) {
    if (prop.startsWith('_')) {
        return;
     }
     target[prop] = value;
   },
   ownKeys(target, prop) {
     // !访问 keys 时，过滤掉目标对象中下划线开头的属性再返回
      return Object.keys(target).filter(key => !key.startsWith('_'))
   },
 }
 
const proxy = new Proxy(dong, handler)
for (const key of Object.keys(proxy)) {
  // console.log(key, proxy[key], 'asdf')
}
console.log(proxy.hello());