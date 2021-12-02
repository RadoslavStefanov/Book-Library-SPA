import { createItem } from "../../helpers/httpRequester.js";
import { createTemplate } from "./createTemplate.js";


export async function drawCreateBook(ctx,next)
{

    function submitHandler(e)
    {
        e.preventDefault();
        let formData = new FormData(e.target);


        let input = {
            title: formData.get('title'),
            description: formData.get('description'),
            imageUrl: formData.get('imageUrl'),
            type: formData.get('type')
        }

        console.log(input);

        let arr = Array.from(Object.keys(input));
        if(arr.some(i=>input[i].length<1))
        {
            alert(`One or more fields are not filled!`);
        }
        else
        {
            createItem(ctx,input);
        }
    }

    let form = 
    {
        submitHandler: submitHandler
    }

    ctx.renderPage(createTemplate(form));

    next();
}