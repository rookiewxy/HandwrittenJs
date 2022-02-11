/**
 * new 的执行过程
 * 1. 创建一个对象obj
 * 2. 该对象的__proto__指向构造函数Fn的原型prototype
 * 3. 执行构造函数Fn的代码，往新创建的对象obj上添加成员属性和方法
 * 4. 返回这个新的对象obj
 */

function _new(target, ...args){
  if (typeof target !== 'function') {
    throw 'target must be a function'
  }

  const obj = Object.create(target.prototype)

  let result = target.apply(obj, args)

  if (typeof result === 'object' && result !== null || typeof result === 'function') {
    return result
  } else {
    return obj
  }

}

function Person(name, sex){
  this.name = name
  this.sex = sex
}
let p1 = _new(Person, '前端胖头鱼', 'sex')
let p2 = new Person('前端胖头鱼', 'sex')

console.log(p1, p2)