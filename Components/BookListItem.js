'use strict'
export const BookListItem = (book) =>{

    const li = document.createElement('li');
    li.setAttribute('class','book-list__item mx-2 mb-2 last:mb-0 p-3 text-white last:border-b-0 border-b border-white cursor-pointer hover:text-slate-800');
    li.setAttribute('id', book.id);
    li.innerHTML = `${book.author} - ${book.title}`;
    return li;

}