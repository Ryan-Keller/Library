// put classes up here


// Book Class
class Book{
    constructor(title, author, pageNum){
    this.title = title
    this.author = author
    this.pageNum = pageNum
    }
}

// UI Class : Handle UI Tasks

class UI {
    static showBook =() =>{
        let books = [
        {
            title: 'Harry Palmer',
            author: 'Sweaty Stevie',
            pageNum: 654,
        }
        ]
        books.forEach((book)=> UI.addBookToList(book))
    }


    static addBookToList(book){
        const list = document.querySelector('#book-list')
        const row = document.createElement('tr')

        row.innerHTML= `
        <td>${book.title}<td>
        <td>${book.author}<td>
        <td>${book.pageNum}<td>
        <td><a href='#' class='delete'>X</a></td>
        `
        // add more data to table above don't for get the class too
        list.appendChild(row)
    }

    static clearFields(){
        document.querySelector('#bookTitle').value = ''
        document.querySelector('#author').value = ''
        document.querySelector('#pageNum').value = ''
    }

    static removeBookFromList(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove()
        }
    }
}


// loads books on page load
document.addEventListener('DOMContentLoaded', UI.showBook)


// enable delete button
document.querySelector('#book-list').addEventListener('click', (e) =>{
    UI.removeBookFromList(e.target)
})

// enable the submit button
document.querySelector('#book-form').addEventListener('submit', (e)=>{
    //get field data
    const title= document.querySelector('#bookTitle').value
    const author= document.querySelector('#author').value
    const pageNum= document.querySelector('#pageNum').value

    let book = new Book(title, author,pageNum)

    UI.addBookToList(book)
    UI.clearFields()
})








// put events down here












































/*let myLibrary = []
// queryselectors
let bookTitle = document.querySelector('#bookTitle').value
let author = document.querySelector('#author').value
let pageNum = document.querySelector('#pageNum').value
console.log(bookTitle);
console.log(author)
console.log(pageNum)
// console.log(myLibrary);

function Book(bookTitle, author, pageNum){
    // the constructor
    this.bookTitle = bookTitle
    this.author = author
    this.pageNum = pageNum
}



function addBookToLibrary() {
    // do stuff here
    myLibrary.push(goodBook)


    console.log(myLibrary);
    return myLibrary

}
*/
