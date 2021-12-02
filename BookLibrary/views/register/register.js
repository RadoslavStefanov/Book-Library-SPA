import { authenticateRegister, register } from "../../helpers/authenticator.js";
import { registerTemplate } from "./registerTemplate.js";


export async function drawRegister(ctx, next) 
{

    function registerHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.target);

        if (authenticateRegister(formData)) {
            let user = {
                email: formData.get('email'),
                password: formData.get('password'),
                repeatPass: formData.get('confirm-pass'),
            }
            register(ctx,user);
            
        }
    }

    let form =
    {
        registerHandler: registerHandler
    }
    let templateResult = registerTemplate(form);
    ctx.renderPage(templateResult);

    next();

}