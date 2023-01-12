const typeCheck = (type) => {
    const typeString = Reflect.apply(Object.prototype.toString, type, [])
    return typeString.slice(
      typeString.indexOf(' ') + 1,
      typeString.indexOf(']')
    ).toLowerCase()
  }

//O typeof não sabe diferenciar um null de um object.

console.log(typeof null === typeof {}) 

//O resultado de nossa função para diferentes tipos:
console.log(typeCheck([])); 
console.log(typeCheck(null)); 
console.log(typeCheck({})); 
console.log(typeCheck('teste')); 
console.log(typeCheck(123));    