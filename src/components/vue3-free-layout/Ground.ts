import {View} from "./View";
import {ViewHandler} from "./ViewHandler";

export class Ground extends View{
    x: 0 = 0;
    y: 0 = 0;

    viewHandler: ViewHandler | null = null;
    activeView: View | null = null;

    constructor(data?: Partial<Ground>) {
        super(data);
        this.width = data?.width ?? 800;
        this.height = data?.height ?? 600;

        this.viewHandler = new ViewHandler();
    }

    changeActiveView(view: View) {
        this.activeView = view;
        if (this.viewHandler) {
            this.viewHandler.width = view.width;
            this.viewHandler.height = view.height;
            this.viewHandler.x = view.x;
            this.viewHandler.y = view.y;
        }
    }
}