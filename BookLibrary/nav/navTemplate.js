import { html } from "../../node_modules/lit-html/lit-html.js";

export let navTemplate = (isUserLogged) => html`
<section class="navbar-dashboard">
    <a href="/dashboard">Dashboard</a>
    ${isUserLogged ? 
    html`<div id="user">
        <span>Welcome, ${localStorage.getItem(`email`)}</span>
        <a class="button" href="/myBooks">My Books</a>
        <a class="button" href="/addBook">Add Book</a>
        <a class="button" href="/logout">Logout</a>
    </div>`: 
    html` <div id="guest">
        <a class="button" href="/login">Login</a>
        <a class="button" href="/register">Register</a>
    </div>`}
</section>
`