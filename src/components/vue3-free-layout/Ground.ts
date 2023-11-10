import {View} from "./View";

export class Ground extends View{
    x: 0 = 0;
    y: 0 = 0;

    constructor(data?: Partial<Ground>) {
        super(data);
        this.width = data?.width ?? 800;
        this.height = data?.height ?? 600;
    }
}