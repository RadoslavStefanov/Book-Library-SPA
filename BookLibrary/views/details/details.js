import { isItemOwned, isUserLogged } from "../../helpers/authenticator.js";
import { deleteItem, getItem, getLikes, likeBook, liked} from "../../helpers/httpRequester.js";
import { detailsTemplate } from "./detailsTemplate.js";




export async function drawItemDetails(ctx,next)
{
    let id = ctx.params.id;
    let item = await getItem(id);

    async function delItem()
    {
        const confirmed = confirm('Are you sure?');
        if(confirmed){
            await deleteItem(ctx,next,id);
        }
        
    }

    let action =
    {
        actionHandler: actionHandler,
    }

    async function actionHandler(e)
    {
        await likeBook(id);
        e.target.style.display=`none`;
        let containerText = document.getElementById(`total-likes`);
        containerText.innerText = `Likes: ${likes = await getLikes(id)}`;
    }

    let alreadyLiked = 1;

    if (isUserLogged())
    {
        alreadyLiked = await liked(id,localStorage.getItem(`userId`));
    }

    let likes = await getLikes(id);
    ctx.renderPage(detailsTemplate(item,isUserLogged(),isItemOwned(item._ownerId),action,likes,alreadyLiked))
    next();
}