
import {BookListItem} from "../Components/BookListItem.js"
'use strict'
export const BookList = (listOfBooks) =>{

    const bookList = document.createElement('ul');
    bookList.setAttribute('class', 'book-list rounded-md bg-with w-full mx-auto');
    listOfBooks.forEach(element => {bookList.appendChild(BookListItem(element))});

    return bookList;

}


