import { authenticateLogin, logIn } from "../../helpers/authenticator.js";
import { loginTemplate } from "./loginTemplate.js";


export let drawLogin = (ctx, next) => {
    
    function loginHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.target);


        let user = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        if(authenticateLogin(formData))
        {
            logIn(ctx,user);
        }
        
    }

    let form =
    {
        loginHandler: loginHandler
    }

    let templateResult = loginTemplate(form);
    ctx.renderPage(templateResult);

    next();

}
