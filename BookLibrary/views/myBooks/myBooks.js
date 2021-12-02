import {perUserItems } from "../../helpers/httpRequester.js";
import { myBooksTemplate } from "./myBooksTemplate.js";



export async function drawMyListings(ctx,next)
{

    let booksList = await perUserItems(localStorage.getItem('userId'));
    
    console.log(booksList);
    ctx.renderPage(myBooksTemplate(booksList));
    next();
}