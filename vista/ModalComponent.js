import { HtmlComponent } from "./HtmlComponent.js";

export class ModalComponent extends HtmlComponent
{
    constructor(modalElement, contentElement)
    {
        super();
        
        this.modal = new bootstrap.Modal(modalElement);
        this.contentElement = contentElement;

        this._elementoHtml = modalElement;
    }

    setContent(elem)
    {
        this.contentElement.innerHTML = "";
        this.contentElement.appendChild(elem);
    }

    show()
    {
        this.modal.show();
    }

}