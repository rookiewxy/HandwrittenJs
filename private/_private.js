/*
 * @Description: 私有属性实现的方式
 * @Autor: wxy
 * @Date: 2022-03-31 11:13:25
 * @LastEditors: wxy
 * @LastEditTime: 2022-03-31 11:15:33
 */

// 1. 从命名上来区分
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

// console.log(dong.hello());