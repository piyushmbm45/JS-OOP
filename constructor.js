// constructor

function Book(title, author, year) {
  this.author = author;
  this.title = title;
  this.year = year;
  this.getSummery = () => {
    return `${this.title} is written by ${this.author} which was published in ${this.year}`;
  };
}

const book1 = new Book("The Power of Habit", "John Dow", "2015");
console.log(book1.getSummery());
