export default function markTab(ctx)
{   
    removeCurrSelection();
    mark(ctx);
}

function mark(ctx)
{
    let tabAttributeValue = ctx.path.split(`/`)[1];
    try
    {
        document.querySelector(`[href="/${tabAttributeValue}"]`).classList.add(`active`);
    }
    catch{}
    
}

function removeCurrSelection()
{
    try
    {
        document.querySelector(`a.active`).classList.remove(`active`);
    }
    catch{}
    
}