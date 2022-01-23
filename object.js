const book = {
    title: 'The Power of Habit',
    author: 'John Dow',
    year: 2011,
    getSummery: function () {
        return `${this.title} is written by ${this.author} which was published in ${this.year}`
    }
}
const book2 = {
    title: 'The Power of Thinking',
    author: 'Jane Dow',
    year: 2015,
    getSummery: function () {
        return `${this.title} is written by ${this.author} which was published in ${this.year}`
    }
}


console.log(book2.getSummery());