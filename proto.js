// constructor
//  some time we want some constructor methods in prototype or we can say we want to access some method on few books not every book
// here comes the prototype
function Book(title, author, year) {
  this.author = author;
  this.title = title;
  this.year = year;
}

// get summery
Book.prototype.getSummery = function () {
  return `${this.title} is written by ${this.author} which was published in ${this.year}`;
};

// get age
Book.prototype.getAge = function () {
    const year = new Date().getFullYear() - this.year;
    return year;
}

// revise / change year
Book.prototype.reviseYear = function (year) {
    this.year = year;
    this.revised = true;
}

const book1 = new Book("The Power of Habit", "John Dow", "2015");
const book2 = new Book("The Power of Thinking", "Jane Dow", "2016");

console.log(book1);
console.log(book1.getSummery());
console.log(book2);
book2.reviseYear('2018')
console.log(book2);