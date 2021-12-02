import { render } from "../node_modules/lit-html/lit-html.js";
import { isUserLogged } from "./authenticator.js";


export function decorateContext(ctx,next)
{
    ctx.renderNav = renderNav;
    ctx.renderPage = renderPage;
    ctx.isUserLogged = isUserLogged;
    next();
}

function renderNav(template)
{
    let navElement = document.querySelector(`nav`);
    render(template,navElement);
}

function renderPage(template)
{
    let mainElement = document.querySelector(`main`);
    render(template,mainElement);
}