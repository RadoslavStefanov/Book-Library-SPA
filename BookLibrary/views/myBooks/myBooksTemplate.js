import { html } from "../../node_modules/lit-html/lit-html.js";


let perBookTemplate = (book) => html`
<li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src="${book.imageUrl}"></p>
    <a class="button" href="/listings/detail/${book._id}">Details</a>
</li>
`

export let myBooksTemplate = (booksList) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for every user's books (if any) -->
    <ul class="my-books-list">
        ${booksList.length>0? booksList.map(b=>perBookTemplate(b)): html``}
    </ul>

    ${booksList.length==0? html`<p class="no-books">No books in database!</p>`: html``}
</section>
`