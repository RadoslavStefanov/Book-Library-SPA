

export function isUserLogged() {
    let token = localStorage.getItem(`authToken`);
    if (token == null || token == undefined) { return false; } else { return true; }
}


export async function logIn(ctx, user) {
    let result = await fetch("http://localhost:3030/users/login", {
        headers:
        {
            "Content-Type": 'application/json'
        },
        method: "POST",
        body: JSON.stringify(user)
    });

    if (result.status != 200) {
        window.alert(result.message);
    }
    else {
        result = await result.json();
        localStorage.setItem('authToken', result.accessToken);
        localStorage.setItem('userId', result._id);
        localStorage.setItem('email', result.email);
        ctx.page.redirect("/dashboard");
    }

}

export async function logOut(ctx) {

    let result = await fetch("http://localhost:3030/users/logout", {
        headers:
        {
            "x-authorization": getAuthToken()
        },
        method: "GET"
    });

    if (result.ok) {
        localStorage.clear();
        ctx.page.redirect(`/`);
    }
}




export async function register(ctx, user) {

    try {
        let result = await fetch("http://localhost:3030/users/register", {
            headers:
            {
                "Content-Type": 'application/json'
            },
            method: "POST",
            body: JSON.stringify(user)
        });

        if (result.status != 200) {
            window.alert(`please use another email/username! Most likely these are taken.`);
        }
        else {
            result = await result.json();
            localStorage.setItem('authToken', result.accessToken);
            localStorage.setItem('userId', result._id);
            localStorage.setItem('email', result.email);
            ctx.page.redirect("/dashboard");
        }
    }
    catch (e) {
        window.alert(e.message);
    }
}

export function authenticateRegister(formData) {
    let user = {
        email: formData.get('email'),
        password: formData.get('password'),
        repeatPass: formData.get('confirm-pass'),
    }

    for (let x of Object.keys(user)) {
        if (user[x] === null || user[x] === undefined || user[x] === ``) {
            window.alert(`Fill all fields!`)
            return false;
        }

        if(user.email.length<1)
        {
            window.alert(`Fill all fields!!`)
            return false;
        }

        if (user.password !== user.repeatPass) {
            window.alert(`Passwords don't match!`)
            return false;
        }

        return true;
    }

}

export function authenticateLogin(formData) {
    let user = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    if (user.email.length < 1 || user.password.length < 1) { window.alert(`Fill all fields!`); return false; }
    return true;
}

export function authenticateEdit(formData) {
    let item = 
        {
            title: formData.get('title'),
            description: formData.get('description'),
            imageUrl: formData.get('imageUrl'),
            type: formData.get('type')
        }

    for(let x of Object.keys(item))
    {
        if(item[x].length==0)
        {
            alert(`Please fill all the fields!`);
            return false;
        }
    }

    return true;
}

function getAuthToken() {
    return localStorage.getItem('authToken');
}

export function isItemOwned(itemOwnerId) {
    if (localStorage.getItem(`userId`) == itemOwnerId) { return true; }
    return false;
}