import {Container} from "./Container";
import {ViewHandler} from "./ViewHandler.ts";
import {View} from "./View.ts";

export class Ground extends Container{
    viewHandler: ViewHandler = new ViewHandler()
    activeView?: Container
    ground: Ground = this

    constructor(data?: Partial<Ground>) {
        super(data);
    }

    setActiveView(view: Container) {
        console.log('setActiveView', view);
        this.activeView = view;
        this.viewHandler.x = view.x;
        this.viewHandler.y = view.y;
        this.viewHandler.width = view.width;
        this.viewHandler.height = view.height;
    }
}