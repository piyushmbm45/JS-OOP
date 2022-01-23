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
};

function Magazine(title, author, year, month){
    // console.log(this);
    Book.call(this,title, author,year);
    this.month = month;
}

// inherit prototype
// without inherit prototype we didn't have access to prototype of book'
Magazine.prototype = Object.create(Book.prototype);

// MagaZine constructor
// in constructor it will show book as constructor without below line
Magazine.prototype.constructor = Magazine;
// instantiate  magazine
const mag = new Magazine('The New Life', 'Piyush Jain', '2020', 'January')
console.log(mag);

