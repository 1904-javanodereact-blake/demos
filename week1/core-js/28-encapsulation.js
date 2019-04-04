function Person(name) {
  let n = name;
  this.getName = () => {
    return n;
  };
  this.setName = (name) => {
    n = name;
  }
}

let joseph = new Person('Joseph');

joseph.setName('Rob');
console.log(joseph.getName());
console.log(joseph.name); // should be undefined