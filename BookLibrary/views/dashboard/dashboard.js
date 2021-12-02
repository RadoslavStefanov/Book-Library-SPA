import { getAllItems } from "../../helpers/httpRequester.js";
import { dashboardTemplate } from "./dashboardTemplate.js";



export async function drawDashboard (ctx,next)
{
    let listingsArr = await getAllItems();
    ctx.renderPage(dashboardTemplate(listingsArr));

    next();
}