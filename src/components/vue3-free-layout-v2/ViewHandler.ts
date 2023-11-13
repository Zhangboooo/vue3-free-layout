import {View} from "./View";

export class ViewHandler extends View{
    constructor(data?: Partial<ViewHandler>) {
        super(data);
        this.backgroundColor = 'transparent';
    }
}