import page from "./node_modules/page/page.mjs";
import { decorateContext } from "./helpers/renderer.js";
import markTab from "./helpers/tabMarker.js";
import { drawNav } from "./nav/nav.js";
import { drawLogin } from "./views/login/login.js";
import { drawDashboard } from "./views/dashboard/dashboard.js";
import { drawRegister } from "./views/register/register.js";
import { logOut } from "./helpers/authenticator.js";
import { drawCreateBook } from "./views/create/create.js";
import { drawItemDetails } from "./views/details/details.js";
import { drawEdit } from "./views/edit/edit.js";
import { deleteItem } from "./helpers/httpRequester.js";
import { drawMyListings } from "./views/myBooks/myBooks.js";





page("/dashboard",decorateContext,drawNav,drawDashboard,markTab)
page("/login",decorateContext,drawNav,drawLogin,markTab)
page("/register",decorateContext,drawNav,drawRegister,markTab)
page("/addBook",decorateContext,drawNav,drawCreateBook,markTab)
page("/listings/delete/:id",delItem)
page("/listings/detail/:id",decorateContext,drawNav,drawItemDetails,markTab)
page("/listings/edit/:id",decorateContext,drawNav,drawEdit,markTab)
page("/logout", (ctx) => {logOut(ctx)})
page("/myBooks",decorateContext,drawNav,drawMyListings,markTab)


page("/index.html","/dashboard");
page("/","/dashboard");
page.start();


async function delItem(ctx, next)
{
    let id = ctx.params.id;
    const confirmed = confirm('Are you sure?');
    if(confirmed){
        await deleteItem(ctx,next,id);
    }
}