import { navTemplate } from "./navTemplate.js";

export let drawNav = (ctx , next) =>
{
    let templateResult = navTemplate(ctx.isUserLogged());
    ctx.renderNav(templateResult);
    next();
}