/*
 * @Description: 私有属性实现的方式
 * @Autor: wxy
 * @Date: 2022-03-31 11:13:25
 * @LastEditors: wxy
 * @LastEditTime: 2022-03-31 11:41:54
 */

// 1. ts private
// private 表示属性私有，只有 class 内部可访问
// protected 表示保护，只有 class 和子 class 可访问
// public 表示共有，外部也可访问

class TDong {
    private name:string
    constructor() {
        this.name = 'dong';
    }
    hello() {
        return 'I\'m ' + this.name ;
    }
}
const tdong = new TDong();
// console.log(dong.hello(), tdong.name);