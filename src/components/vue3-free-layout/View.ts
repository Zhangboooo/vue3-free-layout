import {Container} from "./Container";
import type { Raw} from "vue";
import {markRaw} from "vue";

export class View extends Container{
    width: number = 0;
    height: number = 0;
    x: number = 0;
    y: number = 0;
    backgroundColor: string = 'transparent';
    bindingDom: Raw<HTMLElement> | null = null;
    parent: View | null = null;

    constructor(data?: Partial<View>) {
        super();
        Object.assign(this, data);
    }

    get style(): Record<string, string> {
        return {
            width: `${this.width}px`,
            height: `${this.height}px`,
            left: `${this.x}px`,
            top: `${this.y}px`,
            backgroundColor: this.backgroundColor,
        }
    }

    bindDom(el: any) {
        this.bindingDom = markRaw(el)
    }
}