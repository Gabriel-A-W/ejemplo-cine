export class HtmlComponent
{
    constructor()
    {
        this.template = "";
        this._elementoHtml = null;
    }

    addEventListener(...opts)
    {

        this._elementoHtml.addEventListener(...opts);
    }

    crearElementoPrincipal()
    {
        this._elementoHtml = this.crearElemento(this.template);
    }

    crearElemento(strTemplate)
    {
        return document.createRange().createContextualFragment(strTemplate).firstChild;

    }

    get elementoHtml()
    {
        return this._elementoHtml;
    }



}