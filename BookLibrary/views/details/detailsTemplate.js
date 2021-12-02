import { html } from "../../node_modules/lit-html/lit-html.js";

export let detailsTemplate = (book,isUserLogged,isOwned,action,likes,alreadyLiked) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src="${book.imageUrl}"></p>
        <div class="actions">
            ${isUserLogged? 
                isOwned? 
                    html`
                    <a class="button" href="/listings/edit/${book._id}">Edit</a>
                    <a class="button" href="/listings/delete/${book._id}">Delete</a>
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: ${likes}</span>
                    </div>`
                    : html`
                    ${alreadyLiked!=1? html`<a class="button" id = "like" @click = ${action.actionHandler}>Like</a>`:html``}
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: ${likes}</span>
                    </div>`
            :html`
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likes}</span>
            </div>`}
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>
`