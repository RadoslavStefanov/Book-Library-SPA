import { html } from "../../node_modules/lit-html/lit-html.js";

let perListingTemplate = (listing) => html`
<li class="otherBooks">
    <h3>${listing.title}</h3>
    <p>Type: ${listing.type}</p>
    <p class="img"><img src="${listing.imageUrl}"></p>
    <a class="button" href="/listings/detail/${listing._id}">Details</a>
</li>
`

export let dashboardTemplate = (listingsArr) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All books (If any) -->

    ${listingsArr.length>0? 
        html`
        <ul class="other-books-list">
            ${listingsArr.map(l=>perListingTemplate(l))}
        </ul>` 

        : html`
        <p class="no-books">No books in database!</p>
        `}
</section>
`