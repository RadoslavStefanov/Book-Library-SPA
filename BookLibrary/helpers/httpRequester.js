let baseURL = `http://localhost:3030`;
let baseRedirect = `/`;

export async function getAllItems() {
    let result = await fetch(`${baseURL}/data/books?sortBy=_createdOn%20desc`);
    if (result.ok) {
        result = await result.json();
        return result;
    }
}

export async function submitEdit(ctx, item, id) {
    let result = await fetch(`${baseURL}/data/books/${id}`, {
        headers:
        {
            "x-authorization": localStorage.getItem('authToken')
        },
        method: "PUT",
        body: JSON.stringify(item)
    });
    ctx.page.redirect(`${baseRedirect}`);
}

export async function deleteItem(ctx, next, id) {
    await fetch(`${baseURL}/data/books/${id}`, {
        headers:
        {
            "x-authorization": localStorage.getItem('authToken')
        },
        method: "DELETE"
    });
    ctx.page.redirect(`${baseRedirect}`)

    next();
}

export async function getItem(id) {
    let result = await fetch(`${baseURL}/data/books/${id}`);
    result = await result.json();
    return result;
}

export async function createItem(ctx, item) {
    let result = await fetch(`${baseURL}/data/books`, {
        headers:
        {
            "x-authorization": localStorage.getItem('authToken')
        },
        method: "POST",
        body: JSON.stringify(item)
    });
    ctx.page.redirect(`${baseRedirect}`);
}

export async function perUserItems(id) {
    let result = await fetch(`${baseURL}/data/books?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`, {
        headers:
        {
            "X-uthorization": localStorage.getItem('authToken')
        },
        method: "GET"
    });
    result = await result.json();
    return result;
}

export async function perYearItems(year) {
    let result = await fetch(`${baseURL}/data/cars?where=year%3D${year}`, {
        method: "GET"
    });
    result = await result.json();
    return result;
}

export async function likeBook(id) {

    let bookId = {bookId:id}
    await fetch(`${baseURL}/data/likes`, {
        headers:
        {
            "X-Authorization": localStorage.getItem('authToken')
        },
        method: "POST",
        body: JSON.stringify(bookId)
    });
}


export async function getLikes(id)
{
    let result = await fetch(`${baseURL}/data/likes?where=bookId%3D%22${id}%22&distinct=_ownerId&count`, {
        method: "GET"
    });
    result = await result.json();
    return result;
}

export async function liked(bookId,userId)
{
    let result = await fetch(`${baseURL}/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`, {
        method: "GET"
    });
    result = await result.json();
    return result;
}