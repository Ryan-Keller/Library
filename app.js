let myLibrary = []
// queryselectors
let bookTitle = document.querySelector('#bookTitle').value
let author = document.querySelector('#author').value
let pageNum = document.querySelector('#pageNum').value
console.log(bookTitle);
console.log(author)
console.log(pageNum)
console.log(myLibrary);

function Book(bookTitle, author, pageNum){
    // the constructor
    this.bookTitle = bookTitle
    this.author = author
    this.pageNum = pageNum
}


let goodBook = new Book(bookTitle, author, pageNum)
function addBookToLibrary() {
    // do stuff here
    myLibrary.push(goodBook)


    console.log(myLibrary);
    return myLibrary
}
