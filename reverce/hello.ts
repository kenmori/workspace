console.log("hello typescript");

class Person {
  constructor(private _name: string,private _age: number){}
  get name(){
    return this._name
  }
  get age(){
    return this._age
  }
}

let p = new Person("kenji", 40)
// p.name = "keiko"
console.log(p.name)
console.log(p.age)
