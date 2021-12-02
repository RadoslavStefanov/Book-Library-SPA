import { authenticateEdit } from "../../helpers/authenticator.js";
import {getItem, submitEdit} from "../../helpers/httpRequester.js";
import { editTemplate } from "./editTemplate.js";




export async function drawEdit(ctx,next)
{
    let id = ctx.params.id;
    let item = await getItem(id);


    function submitHandler(e)
    {
        e.preventDefault();

        let formData = new FormData(e.target);

        let item = 
        {
            title: formData.get('title'),
            description: formData.get('description'),
            imageUrl: formData.get('imageUrl'),
            type: formData.get('type')
        }

        if(authenticateEdit(formData))
        {
            submitEdit(ctx,item,id);
        }
        
    }

    let form =
    {
        submitHandler: submitHandler
    }

    ctx.renderPage(editTemplate(item,form))
    next();
}